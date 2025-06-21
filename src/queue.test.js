import assert from 'assert';
import { describe, it, beforeEach } from 'node:test';
import { Queue } from './queue.js';

// Test suite for the Queue class
describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should initialize an empty queue', () => {
    assert.strictEqual(queue.peek(), undefined);
    assert.deepStrictEqual(queue.toArray(), []);
  });

  it('should add elements to the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    assert.strictEqual(queue.peek(), 1);
    assert.deepStrictEqual(queue.toArray(), [1, 2, 3]);
  });

  it('should remove elements from the queue', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    assert.strictEqual(queue.pop(), 1);
    assert.strictEqual(queue.pop(), 2);
    assert.strictEqual(queue.pop(), 3);
    assert.strictEqual(queue.pop(), null);
  });

  it('should handle mixed operations correctly', () => {
    queue.push(1);
    queue.push(2);
    assert.strictEqual(queue.pop(), 1);
    queue.push(3);
    assert.strictEqual(queue.pop(), 2);
    assert.strictEqual(queue.pop(), 3);
    assert.strictEqual(queue.pop(), null);
  });

  it('should return the correct array representation', () => {
    queue.push(1);
    queue.push(2);
    queue.push(3);

    assert.deepStrictEqual(queue.toArray(), [1, 2, 3]);

    queue.pop();
    assert.deepStrictEqual(queue.toArray(), [2, 3]);

    queue.pop();
    queue.pop();
    assert.deepStrictEqual(queue.toArray(), []);
  });
});
