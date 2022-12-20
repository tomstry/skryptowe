const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

describe('script.js', () => {
  it('correct file', () => {
    // const filePath = path.join(__dirname, 'file.txt');
    // fs.writeFileSync(filePath, 'Some file contents');

    const { stdout } = spawnSync(process.execPath, ['./script.js', 'file.txt'], {
      encoding: 'utf-8',
    });
    expect(stdout).toContain(`'file.txt' jest plikiem, a jego zawartość to:`);
    expect(stdout).toContain('Argentyna mistrzem świata <3');
  });

  it('correct directory', () => {
    const { stdout } = spawnSync(process.execPath, ['./script.js', 'node_modules'], {
      encoding: 'utf-8',
    });
    expect(stdout).toContain(`'node_modules' jest katalogiem`);
  });

  it('incorrect path', () => {
    const { stdout } = spawnSync(process.execPath, ['./script.js', 'nie-istniejacy-plik'], {
      encoding: 'utf-8',
    });
    expect(stdout).toContain(`'nie-istniejacy-plik' nie istnieje`);
  });
});
