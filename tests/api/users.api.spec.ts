import{test, expect} from '@playwright/test'

let AUTH_TOKEN = {Authorization : 'Bearer ffff1b24c4129d218e18689a9283c41c19fe4f8e3c3d282dfe16fb601adb6341'};

test('get user data', async ({ request })=>{

    let response = await request.get('https://gorest.co.in/public/v2/users/8502212', {
        headers: AUTH_TOKEN
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);
   console.log(response.status());
   console.log(response.statusText());

})

test('Create user data', async ({ request })=>{

    let userData = {
        name: 'Buday',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'

    }; 

    let response = await request.post('https://gorest.co.in/public/v2/users', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);
   console.log(response.status());
   console.log(response.statusText());

})

test('Update user data', async ({ request })=>{

    let userData = {
        name: 'Buday01',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'inactive'

    }; 

    let response = await request.put('https://gorest.co.in/public/v2/users/8505049', {
        headers: AUTH_TOKEN,
        data: userData
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);
   console.log(response.status());
   console.log(response.statusText());

})

test('Delete user data', async ({ request })=>{

    let response = await request.delete('https://gorest.co.in/public/v2/users/8505049', {
        headers: AUTH_TOKEN,
       
    });

 
   console.log(response.status());
   console.log(response.statusText());

})

test('Trying to get deleted user data', async ({ request })=>{

    let response = await request.get('https://gorest.co.in/public/v2/users/8505049', {
        headers: AUTH_TOKEN,
       
    });

    //console.log(response);
    let jsonBody = await response.json();
    console.log(jsonBody);
   console.log(response.status());
   console.log(response.statusText());

})