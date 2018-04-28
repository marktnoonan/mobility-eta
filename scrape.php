<?php
ini_set('display_errors', 0);
// logging in with cURL based on http://thisinterestsme.com/php-login-to-website-with-curl/
// this returns the DOM of the page it fetched as a string
// simple HTML DOM turns that string back into a tree that we can traverse with selectors.

date_default_timezone_set('America/New_York');
// if UN and PW are set, and not equal to "test" or empty strings.
if (isset($_POST['providedUsername']) && isset($_POST['providedPassword']) && $_POST['providedUsername'] !== '' && $_POST['providedPassword'] !== '' && strtolower($_POST['providedUsername']) !== 'test' && $_POST['providedPassword'] !== 'test') {
    $html = martaLogin();
} elseif (strtolower($_POST['providedUsername']) === 'test' && $_POST['providedPassword'] === 'test') { // fetch dummy data for test user Joanna M Customer
    $response = file_get_contents('example-trips.json');
    exit(json_encode($response));
} else { // nothing posted
exit("username or password is missing!");
}

function martaLogin()
{
    define('USERNAME', $_POST['providedUsername']);
    define('PASSWORD', $_POST['providedPassword']);

    //Set a user agent. This basically tells the server that we are using Chrome ;)
    define('USER_AGENT', 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.2309.372 Safari/537.36');

    //Where our cookie information will be stored (needed for authentication).
    define('COOKIE_FILE', 'cookie.txt');

    //URL of the login form.
    define('LOGIN_FORM_URL', 'https://martapp.mvtransit.com/Account/Login');

    //Login action URL. Sometimes, this is the same URL as the login form.
    define('LOGIN_ACTION_URL', 'https://martapp.mvtransit.com/Account/Login');

    //An associative array that represents the required form fields.
    //You will need to change the keys / index names to match the name of the form
    //fields.
    $postValues = array(
        'Username' => USERNAME,
        'Password' => PASSWORD
    );

    //Initiate cURL.
    $curl = curl_init();

    //Set the URL that we want to send our POST request to. In this
    //case, it's the action URL of the login form.
    curl_setopt($curl, CURLOPT_URL, LOGIN_ACTION_URL);

    //Tell cURL that we want to carry out a POST request.
    curl_setopt($curl, CURLOPT_POST, true);

    //Set our post fields / date (from the array above).
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($postValues));

    //We don't want any HTTPS errors.
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    //Where our cookie details are saved. This is typically required
    //for authentication, as the session ID is usually saved in the cookie file.
    curl_setopt($curl, CURLOPT_COOKIEJAR, COOKIE_FILE);

    //Sets the user agent. Some websites will attempt to block bot user agents.
    //Hence the reason I gave it a Chrome user agent.
    curl_setopt($curl, CURLOPT_USERAGENT, USER_AGENT);

    //Tells cURL to return the output once the request has been executed.
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    //Allows us to set the referer header. In this particular case, we are
    //fooling the server into thinking that we were referred by the login form.
    curl_setopt($curl, CURLOPT_REFERER, LOGIN_FORM_URL);

    //Do we want to follow any redirects?
    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, false);

    //Execute the login request.
    curl_exec($curl);

    //Check for errors!
    if(curl_errno($curl)){
        throw new Exception(curl_error($curl));
    }

  //We should be logged in by now. Let's attempt to access a password protected page
    curl_setopt($curl, CURLOPT_URL, 'https://martapp.mvtransit.com/Trips/GetCalendarData?year=2018&month=4');

    //Use the same cookie file.
    curl_setopt($curl, CURLOPT_COOKIEJAR, COOKIE_FILE);

    //Use the same user agent, just in case it is used by the server for session validation.
    curl_setopt($curl, CURLOPT_USERAGENT, USER_AGENT);

    //We don't want any HTTPS / SSL errors.
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    //Execute the GET request and print out the result.
    $html = curl_exec($curl);
    
    echo json_encode($html);
}


