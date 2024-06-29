'use client'
import React, { useState, useEffect } from 'react'
import font from 'next/font/local'
const myFont = font({ src: '../../../../public/fonts/MilkyNice.otf' })
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ReactLoading from 'react-loading';
import { createNewClient } from '@/utils/supabase/client';
import { useUser } from '@/context'
import { useToast } from "@/components/ui/use-toast"

function Page() {
  const [dragging, setDragging] = useState(false);
  const [images, setImages] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useUser();
  const { toast } = useToast()
  const supabase = createNewClient()

  useEffect(() => {

    if (images?.length > 0) {
      setOpenDialog(true)
    }

  }, [images])


  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.target.files) {
      const files = e.dataTransfer.files;
      setImages(files)
      setOpenDialog(true)
    }
  };

  const handleUpload = (e) => {
    if (e.target.files) {
      const fileList = e.target.files;
      setImages(fileList);
    }
  }

  const cancelUpload = () => {
    setImages(null)
  }
  const confirmUpload = async () => {
    toast({
      title: "Image Uploading...",
      description: "Adding into database and sharing with others.",
    })
    const uploadedImages = await uploadImagesToSupabase(images);

    if (uploadedImages.length > 0) {
      storeImageUrlsInDatabase(uploadedImages);
      setImages(null)
    }

  }

  const uploadImagesToSupabase = async (images) => {
    const userId = currentUser?.user_id
    const uploadedImages = [];
    if (userId) {
      for (let image of images) {
        const { data, error } = await supabase
          .storage
          .from('user-images')
          .upload(`${userId}/${image.name}`, image);

        if (error) {
          console.error('Error uploading image:', error);
          toast({
            variant: 'destructive',
            title: 'uh Oh! Something went wrong!',
            description: `${error.message}`
          })
        } else {
          uploadedImages.push(data?.path);
        }
      }
      return uploadedImages;
    }
  };


  const storeImageUrlsInDatabase = async (imageUrls) => {
    const userId = currentUser?.user_id
    const { data, error } = await supabase
      .from('user_images')
      .insert({
        user_id: userId,
        images: JSON.stringify(imageUrls)
      });

    if (error) {
      console.error('Error storing image URLs:', error);
      toast({
        variant: 'destructive',
        title: 'uh Oh! Something went wrong!',
        description: `${error.message}`
      })
    } else {
      console.log('Image URLs stored successfully:', data);
      toast(
        {
          description: 'Successfully added images!'
        }
      )
    }
  };

  return (
    <div className={`${myFont.className} min-h-screen`}>
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              You are sharing this images in community. You can always delete them if you want.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={cancelUpload}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmUpload}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <section className='bg-[#EDFBF4] w-full md:pt-10 flex flex-col gap-16 items-center md:px-12 px-7 mb-16'>
        {
          isLoading ?
            <ReactLoading type='spinningBubbles' color='#416072' height={100} width={55} />
            :
            <>
              <span className='flex flex-col items-center'>
                <h3 className='lg:text-5xl md:text-4xl sm:text-4xl text-3xl text-[#CC017A]'>
                  Share what you've cooked with community
                </h3>
              </span>
              <div
                className={`w-full h-[300px] ${dragging ? 'bg-blue-100' : 'bg-white'} rounded-md flex flex-col justify-center items-center gap-8`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <VscFileSymlinkDirectory className='text-9xl text-[#8fa5af]' />
                <div className='font-sans text-center text-[#416072]'>
                  Drag and drop or choose an image to upload.
                </div>
                <Button variant='default' className='font-sans' onClick={handleUpload}>
                  <label htmlFor='image-upload' className='cursor-pointer'>
                    Upload Image
                  </label>
                  <input
                    id='image-upload'
                    type='file'
                    accept='image/*'
                    className='hidden'
                    multiple
                    onChange={handleUpload}
                  />
                </Button>
              </div>
            </>
        }
      </section>
    </div>
  );
}

export default Page;
