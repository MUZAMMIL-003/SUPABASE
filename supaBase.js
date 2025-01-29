import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

let email = document.getElementById('email').value
let password = document.getElementById('password').value
letbttn = document.getElementById('submit')


// Sign up
GamepadButton.addEventListener('click', async () => {
const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  })
    console.log(data, error)})  