import { createClient } from"@supabase/supabase-js";

const supabaseUrl = "https://abzmixwdnufrvhtbnnqc.supabase.co";
const supabaseKey = "sb_publishable_QBANL9xFPPFVQ8LV4NsHEA_NUYI9PiQ";

export const supabase = createClient(supabaseUrl, supabaseKey)