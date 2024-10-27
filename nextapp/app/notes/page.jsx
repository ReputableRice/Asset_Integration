import { createClient } from '../../utils/supabase/server'
import Navigation from '../../components/navigation'

export default async function Notes() {
    const supabase = await createClient();
    const { data: notes } = await supabase.from("notes").select();

    return (
        <>
            <Navigation />
            <pre>{JSON.stringify(notes, null, 2)}</pre>
        </>
    )
}