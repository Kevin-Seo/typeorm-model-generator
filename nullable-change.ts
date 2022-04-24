import * as fs from 'fs';
import * as readline from 'readline';
import { readdir } from 'fs/promises';

const OUTPUT_FOLDER = 'output/entities';

const writeLine = (ws: fs.WriteStream, str: string) => {
  ws.write(str + '\n');
};

const main = async () => {
  try {
    const files = await readdir(OUTPUT_FOLDER);
    for (const file of files) {
      const originFilePath = OUTPUT_FOLDER + '/' + file;
      const newFilePath = OUTPUT_FOLDER + '/zzz_replaced_' + file;
      console.log(originFilePath);

      const readFileStream = fs.createReadStream(originFilePath);
      fs.rmSync(newFilePath, { force: true });
      const writeFileStream = fs.createWriteStream(newFilePath, {
        flags: 'a', // 'a' means appending (old data will be preserved)
      });
      const rl = readline.createInterface({
        input: readFileStream,
        crlfDelay: Infinity,
      });

      let foundNull = false;
      let result: RegExpExecArray | null;
      for await (const line of rl) {
        let newLine = line;
        // Each line in input.txt will be successively available here as `line`.
        // console.log(`Line from file: ${line}`);
        if (foundNull) {
          const regexp = /(\ *)(?<NEED_REPLACE>\w*)(: )(.*)(null;)/g;
          while ((result = regexp.exec(line)) !== null) {
            let found = result.groups?.NEED_REPLACE;
            if (found) {
              console.log(newLine);
              newLine = newLine.replace(found, found + '?');
              console.log(newLine);
              console.log('');
            }
            break;
          }

          foundNull = false;
        }

        if (line.includes('nullable: true')) {
          foundNull = true;
        } else {
          foundNull = false;
        }

        writeLine(writeFileStream, newLine);
      }

      fs.renameSync(newFilePath, originFilePath);

      readFileStream.close();
      writeFileStream.close();
    }
  } catch (err) {
    console.error(err);
  }
};

main();
