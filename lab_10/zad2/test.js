const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

describe('script.js', () => {
  it('should correctly identify a file', () => {
    const filePath = path.join(__dirname, 'file.txt');
    fs.writeFileSync(filePath, 'Some file contents');

    const { stdout } = runScript(filePath);
    expect(stdout).toContain(`'${filePath}' jest plikiem, a jego zawartość to:`);
    expect(stdout).toContain('Some file contents');
  });

  it('should correctly identify a directory', () => {
    const dirPath = path.join(__dirname, 'directory');
    fs.mkdirSync(dirPath);

    const { stdout } = runScript(dirPath);
    expect(stdout).toContain(`'${dirPath}' jest katalogiem`);
  });

  it('should handle non-existent paths', () => {
    const { stdout } = runScript('non-existent-path');
    expect(stdout).toContain(`'non-existent-path' nie istnieje`);
  });
});

function runScript(path) {
  const childProcess = spawnSync(process.execPath, ['./script.js', path], {
    encoding: 'utf-8',
  });

  return childProcess;
}
