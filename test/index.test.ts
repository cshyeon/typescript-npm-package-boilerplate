import { testText, ModuleB as ModuleBFromIndex } from '../src/index';
import ModuleB from '../src/moduleB';

describe('main test', () => {
  it('check testText is equal', async () => {
    expect(testText).toBe('123');
  });

  it('check ModuleB', async () => {
    expect(ModuleBFromIndex).toBe(ModuleB);
  });
});
