'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { jost } from '@/utils/jost';
import instaIcon from '@/../public/assets/instaIcon.svg';
import { createNewClient } from '@/utils/supabase/client';

function UserUploadCarousal() {
    const [imageUrls, setImageUrls] = useState([]);
    const supabase = createNewClient();

    useEffect(() => {
        getUserPhotos();
    }, [supabase]);

    const sourceImageURL = process.env.NEXT_PUBLIC_SUPABASE_IMAGE_URL;
    const responsive = {
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 4,
            partialVisibilityGutter: 40
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
        }
    };

    const getUserPhotos = async () => {
        const { data, error } = await supabase
            .from('user_images')
            .select('images')
            .order('created_at', { ascending: false });

        if (error) {
            console.error(error);
            return;
        }

        if (data) {
            const imageUrls = [];
            data.forEach((item) => {
                const urls = JSON.parse(item.images);
                imageUrls.push(...urls);
            });
            setImageUrls(imageUrls);
        }
    };

    return (
        <div className='md:px-20 px-4 w-full flex flex-col mb-40'>
            <Carousel
                arrows={false}
                additionalTransfrom={0}
                autoPlay
                autoPlaySpeed={70}
                centerMode={false}
                className="mt-10 "
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                // shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
                transitionDuration={1000}
            >
                {
                    // imageUrls?.length > 0 ? (
                    imageUrls.map((url, index) => (
                        <div key={index} className='md:w-[250px] md:mx-0 mx-4 md:h-[250px] h-[450px] w-auto relative'>
                            <Image
                                src={`${sourceImageURL}${url}`}
                                alt={`user-upload-${index}`}
                                fill
                                className='object-cover'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))
                    // ) :null
                }
            </Carousel>
        </div>
    );
}

export default UserUploadCarousal;
