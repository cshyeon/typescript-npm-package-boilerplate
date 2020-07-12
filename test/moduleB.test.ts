import ModuleB from '../src/moduleB';

describe('intro()', () => {
  it('intro return check', async () => {
    expect(ModuleB.intro()).toBe('i am ModuleB');
  });
});
