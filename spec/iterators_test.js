var expect = require('chai').expect;
var Iterators = require('../iterators');

describe('Iterators', function () {
  describe('#max', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the maximum in an array', function () {
      expect(Iterators.max(myArr)).to.equal(67);
    });
    it('should return -Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.max(myArr)).to.equal(-Infinity);
    });
  });
  describe('#min', function () {

    // cleaner to declare the variable outside of the beforeEach function
    var myArr;

    // use beforeEach(function(){}); to create a variable before each test is run.
    // This prevents overwriting when we have multiple tests and manipulate multiple values
    beforeEach(function () {
      myArr = [66,22,67, 34];
    });

    it('should return the manimum in an array', function () {
      expect(Iterators.min(myArr)).to.equal(22);
    });
    it('should return Infinity for empty array', function () {
      myArr = [];
      expect(Iterators.min(myArr)).to.equal(Infinity);
    });
  });
  describe("#each",function(){
    var names = ["billy", "bob", "joe"];


    it("should get the length of each name", function(){
        expect(Iterators.each(names, function(){

        }));
      });
    });
    describe("#map",function(){
      var names = ["billy", "bob", "joe"];
      
      it("should return an array of the lengths of each name", function(){
        expect(Iterators.map(names, function(string){
          return string.length;
        })).to.deep.equal([5,3,3]);        
      });
      it("should return an array of the first letter of each name", function(){
        expect(Iterators.map(names, function(string){
          return string[0];
        })).to.deep.equal(["b","b","j"]);        
      });
    });

  describe("#filter",function(){
    var names = ["billy", "bob", "joe"];
    
    it("should return an array of the names who's length are greater than 3", function(){
      expect(Iterators.filter(names, function(string){
        return string.length > 3;
      })).to.deep.equal(["billy"]);        
    });
    it("should return an array of the names who's length are less than 4", function(){
      expect(Iterators.filter(names, function(string){
        return string.length < 4;
      })).to.deep.equal(["bob", "joe"]);        
    });
    it("should return an empty array when no items meet the criteria", function(){
      expect(Iterators.filter(names, function(string){
        return string.length < 3;
      })).to.deep.equal([]);        
    });
    it("should return an empty array when you pass in an empty array", function(){
      expect(Iterators.filter([], function(string){
        return true;
      })).to.deep.equal([]);        
    });
  });
    
  describe("#reduce",function(){
  var myArr;

  beforeEach(function () {
    myArr = [1,2,3,4,5];
  });
      
    it("should return the sum of all the numbers", function(){
      expect(Iterators.reduce(myArr, function(a,b){
        return a+b;
      })).to.equal(15);        
    });
    it("should return the product of all the numbers", function(){
      expect(Iterators.reduce(myArr, function(a,b){
        return a*b;
      })).to.equal(120);        
    });
    it("should return undefined when passed in an empty list", function(){
      expect(Iterators.reduce([], function(a,b){
        return a*b;
      })).to.equal(undefined);        
    });
  });

  describe("#reject",function(){
    var names = ["billy", "bob", "joe"];
    
    it("should return a array of the names", function(){
      expect(Iterators.reject(names, function(string){
        return string.length > 3;
      })).to.deep.equal(["bob", "joe"]);        
    });
    it("should return an empty array when all are rejected", function(){
      expect(Iterators.reject(names, function(string){
        return string.length > 1;
      })).to.deep.equal([]);        
    });
    it("should return an empty array when an empty array is passed in", function(){
      expect(Iterators.reject([], function(string){
        return false;
      })).to.deep.equal([]);        
    });
  });
});
