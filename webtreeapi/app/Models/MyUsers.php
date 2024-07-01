<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyUsers extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $primaryKey = 'customerid';
    protected $fillable = ['email', 'fullname','password'];
    protected $table = 'my_users';
    
}
