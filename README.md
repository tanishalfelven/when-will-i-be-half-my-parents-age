# WHEN WILL I BE HALF MY PARENTS AGE?

The age old question, now as a easily usable javascript package!

example usage:
```js
const whenWillIBeHalfMyParentsAge = require("when-will-i-be-half-my-parents-age");

// input must be a valid date string or an error is thrown
whenWillIBeHalfMyParentsAge({
    me : "10/25/1998",
    parent : "8/8/1972",
});

// => returns object like
{
    halfday: <Date> representing date this occurs
    parentAge: <String> formatted string representing parents age at this time
    myAge: <String> formatted string representing your age at this time
}
```
