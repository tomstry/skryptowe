var expect = chai.expect;

describe('Tests', function() {
 it('Cyfry: ', function() {
    chai.assert.equal(cyfry('1234'),10);
    chai.assert.equal(cyfry('abcd'),0);
    chai.assert.equal(cyfry('ab2137'),13);
    chai.assert.equal(cyfry('17xd'),8);
    chai.assert.equal(cyfry(''),0);
 });
 it('Litery: ', function() {
    chai.assert.equal(litery('1234'),0);
    chai.assert.equal(litery('abcd'),4);
    chai.assert.equal(litery('ab2137'),2);
    chai.assert.equal(litery('17xd'),2);
    chai.assert.equal(litery(''),0);
 });
 it('Suma: ',function() {
    chai.assert.equal(suma('1234'),1234);
    chai.assert.equal(suma('abcd'),1234);
    chai.assert.equal(suma('ab2137'),1234);
    chai.assert.equal(suma('17xd'),1251);
    chai.assert.equal(suma(''),1251);
 });
});