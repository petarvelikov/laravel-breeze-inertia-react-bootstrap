<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Validator;
use DB;

class ItemController extends Controller
{
    public function index()
    {
        $items = DB::table('items')->get();

        return Inertia::render('Items/Index', ['items' => $items]);
    }


    public function create()
    {
        return Inertia::render('Items/Create');
    }


    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required|alpha|min:3|max:25',
            'image' => 'required|image|mimes:jpeg,jpg,png,gif,svg|max:256'
        ])->validate();

        $fileName = time() . '.' . $request->image->extension();
        $request->image->move(public_path('uploads'), $fileName);

        Item::create([
            'name' => $request->name,
            'image' => $fileName
        ]);

        return redirect()->route('items.index');
    }


    public function show(Item $item)
    {
        return Inertia::render('Items/Show', ['item' => $item]);
    }


    public function edit(Item $item)
    {
        return Inertia::render('Items/Edit', ['item' => $item]);
    }


    public function update($id, Request $request) // TODO
    {
        Validator::make($request->all(), [
            'name' => 'required|alpha|min:3|max:25'
        ])->validate();

        Item::find($id)->update($request->all());

        return redirect()->route('items.index');
    }


    public function destroy($id)
    {
        Item::find($id)->delete();

        return redirect()->route('items.index');
    }

}
