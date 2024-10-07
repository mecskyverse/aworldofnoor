import { NextResponse } from "next/server";
import { createNewClient } from '@/utils/supabase/client';
const supabase = createNewClient()

export async function GET() {
    try {
        const { data, error } = await supabase
        .from('user_images')
        .select('id')
        .limit(1)
        if (error) throw error
        return NextResponse.json({ message: 'Keep-alive successful' })
    } catch (error) {
        console.error('Keep-alive failed:', error)
        return NextResponse.json({ error: 'Keep-alive failed' })
    }
}