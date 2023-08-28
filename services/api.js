import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://clmeapyorwwjlwpwtzeb.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbWVhcHlvcnd3amx3cHd0emViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjM4NDc3NCwiZXhwIjoyMDA3OTYwNzc0fQ.gtt7IOx2pkBzX8ISH7tmmtboaC7T9YmFpqW3SMpgNlQ",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsbWVhcHlvcnd3amx3cHd0emViIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MjM4NDc3NCwiZXhwIjoyMDA3OTYwNzc0fQ.gtt7IOx2pkBzX8ISH7tmmtboaC7T9YmFpqW3SMpgNlQ"
    }
})