import { ExponentialPipe } from './exponential.pipe';

describe('ExponencialPipe', () => {
  it('create an instance', () => {
    const pipe = new ExponentialPipe();
    expect(pipe).toBeTruthy();
  });
});
