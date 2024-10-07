import { NextResponse } from "next/server";
import { createNewClient } from '@/utils/supabase/client';
const supabase = createNewClient()
var cron = require('node-cron');

export async function GET() {
    try {
        cron.schedule('* * * * *', async () => {

            console.log('')
            console.log('######################################')
            console.log('#                                    #')
            console.log('# Running scheduler every 20 minutes #')
            console.log('#                                    #')
            console.log('######################################')
            console.log('')

            // Perform your action here
            const { data, error } = await supabase
        .from('user_images')
        .select('id')
        .limit(1)
        if (error) throw error
        return NextResponse.json({ message: 'Keep-alive successful' })
        });
    } catch (error) {
        console.error('Keep-alive failed:', error)
        return NextResponse.json({ error: 'Keep-alive failed' })
    }
}