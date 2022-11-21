let functionTest = require('./function')



test('test should run and should return 2', () => {
    expect(functionTest.returnTwo()).toBe(2)
})

test('test should run and return hello with a name', () => {
    expect(functionTest.greeting('Kayla')).toBe('Hello, Kayla.')
})

test('test should add two number together', () => {
    expect(functionTest.add(10, 2)).toBe(12)
})

test('rest should subtract two numbers', () => {
    expect(functionTest.subtract(10, 2)).toBe(8)
})

test('test should multiply two numbers', () => {
    expect(functionTest.multiply(10, 2)).toBe(20)
})

test('test should divide two numbers', () =>{
    expect(functionTest.divide(10, 2)).toBe(5)
})