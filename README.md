
# DEPRECATED

*Sept, 2016* I just found out about [casual](https://github.com/boo1ean/casual), which does most of this and a lot more. It looks really cool, and fully formed. It's what I will use for fake data in the future. I'll leave this repo here for my own reference.

# Randy Robotson

Generate a list of random people as JSON, JS and more. Configurable and Extensible.

## Command Line Interface (CLI)

### Arguments

#### --config

```
robotson --config="path/to/config/file"
```

#### --outFile

By detault, robotoson outputs to standard out, but you can have it go straight to a file.

```
robotson --outFile="your/data/will/be/here"
```


#### --outputType

Robotson can output either as JS or JSON data. 

```
robotson --outputType="json"
robotson --outputType="js"
```


#### --varName

When outputing to javascript, the data needs to be stored in a variable to be of any use. You'll probably want to keep it global so any part of your prototype can use it. 

On the frontend it will be a property of window, but in server context you'll need to set it to something else. 

If you have more than one dataset in your project it's necessary to name each of them.

Default: `window.mock_data`

```
robotson --outputType="js" --varName="window.myVariableName"
```


## Config File Format

The config file can be either js or json. In either case the data format is the same.

```js
{
  count: 10, // number of records to be generated
  fields: [] // list of fields to be generated
}
```


### Fields

Fields consist of a `name` and a `generator` and any options that the generator might need.

```js
{
  count: 10,
  fields: [
    {
      name: "myFieldName",
      generator: 'fullname'
    },
    {
      name: "myId",
      generator: 'integer',
      min: 1000,
      max: 9999
    },
    {
      name: 'myListGenerator',
      generator: 'fromList',
      list: ['one', 'two', 'three', 'four']
    },
    {
      name: "myCustomGenerator",
      generator: myCustomGeneratorFunction
    }
  ]
}
```

### Generators

Generators are simple functions that return a single bit of data. There are a set of built in generators; for a complete list, see the generators directory. You can also pass in a custom generator as a function.

**List of generators**

- `address` - **TODO** - completely empty
- `birthday` - a date in the past. Pass in `minAge` and `maxAge` (years)
- `boolean` 
- `date` - pass in `min` and `max` (Currently only supports momentjs inputs)
- `firstname` - **TODO** accept an input file with names
- `float` 
- `fromList` - pass in a list, can be any sort of serializable objects
- `fullname` - combines first and last names
- `integer`
- `lastname` - **TODO** accept an input file with names
- `phone` - **TODO** - completely empty
- `place` - A placename from a list of top place names. **TODO** accept an input file with names
- `sex` - **TODO** - completely empty
- `ssn` - **TODO** - completely empty
- `test` - **TODO** - completely empty


## Roadmap

- Finish the basic generators
- add options to basic generators
- deploy as npm package
- add support for running as a module rather than cli
