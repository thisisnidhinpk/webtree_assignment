<?php

namespace App\Http\Controllers;

use App\Models\MyUsers;
use Illuminate\Support\Facades\Hash;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class MyUsersController extends Controller
{
    
    //
    public function userRegister(Request $request)
{
     try{
    $validatedData = $request->validate([
        'email' => 'required|email',
        'fullname' => 'required|string|max:255',
        'password' => 'required|string|min:6',
        

    ]);
  

    // // Hash the password before storing it in the database
     $validatedData['password'] = bcrypt($validatedData['password']);

    // Create a new student with the hashed password
    
        $userreg = MyUsers::create($validatedData);
       // return response()->json($userreg);
        // if($userreg)
        //    {
               return response()->json([
                   'status'=>200,
                   'Msg'=>'Data added success'
               ]);
        //    }
        //    else{
        //        return response()->json([
        //            'status'=>500,
        //            'Msg'=>'Insertion failed'
        //        ],500);
        //      }
    }
    catch (ValidationException $e) {
        // Handle generic exception
        // return response()->json(['errors.generic', ['message' => $e->validator->errors()]], 500);
        return response()->json( $e->validator->errors());
    }
    
    // Additional logic...

   // return response()->json($userreg['profpic'], 201);
    //return response()->json($stud, 201);
}
public function login(Request $request)
    {
        // $validatedData = $request->validate([
        //     'email' => 'email',
            
        //     'password' => 'string|min:6',
        // $email = $request->input('email');
        // $password = $request->input('password');  
        try{
            $validatedData = $request->validate([
                'email' => 'required|email',
                
                'password' => 'required|string|min:6',
                
        
            ]);
          
        
            // // Hash the password before storing it in the database
            // $validatedData['password'] = bcrypt($validatedData['password']);

        $user = MyUsers::where('email',  $validatedData['email'])->first();
     

    if (!$user) {
        // User found
        //  return $user;
        return response()->json(['error' => 'User not found']);
        //return response()->json([ $user->userroll], 406);
        //return response()->json([$user], 406);
    }
    if (Hash::check($validatedData['password'], $user['password'])) {
        // Passwords match
        return response()->json( $user);
    } else {
        // Passwords do not match
        return response()->json(['error' => 'Invalid password']);
    }
    // return response()->json( $user);
   // return response()->json(['error' => $validatedData['password']]);
}
catch (ValidationException $e) {
    // Handle generic exception
    // return response()->json(['errors.generic', ['message' => $e->validator->errors()]], 500);
    return response()->json( $e->validator->errors());
}
    }
}
