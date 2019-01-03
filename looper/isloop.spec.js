'use strict';
const {expect} = require('chai');
const LinkedList = require('./linkedlist');
const isLoop = require('./isloop');

//These LLs have loops!
const numbers = [1,2,3,4,5,6,7,8,9,10];
const letters = ['a','b','c','d','e','f','g','h','i'];
const emojis = ['🥚','🐣','🦅 ', '👾'];

const test1 = new LinkedList();
test1.addToHead(0)
numbers.forEach(val => test1.addToTail(val));
test1.getNthNode(6).next = test1.getNthNode(3);

const test2 = new LinkedList();
test2.addToHead('z');
letters.forEach(letter => test2.addToTail(letter));
test1.getNthNode(9).next = test1.getNthNode(1);

// This LL has no loop!
const test3 = new LinkedList();
test3.addToHead('📺');
emojis.forEach(el => test2.addToTail(el))

describe('is loop', () => {

	// Remember to write a few tests of your own! :)
	it('returns true if linked list contains a loop', () =>{
		expect(isLoop(test1)).to.equal(true);
		expect(isLoop(test2)).to.equal(true);
	});

	it('returns false if linked list contains no loop', () =>{
		expect(isLoop(test3)).to.equal(false);
	});
});