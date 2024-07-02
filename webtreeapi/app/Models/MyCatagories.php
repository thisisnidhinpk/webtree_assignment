<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyCatagories extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $primaryKey = 'catagoryid';
    protected $fillable = ['customerid', 'catagory'];
    protected $table = 'my_catagories';
}
