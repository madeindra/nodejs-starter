# NodeJS Starter Project

Just another starter project in NodeJS.

## Stacks

- Language: Typescript (compile to Javascript)
- Framework: Express
- Database: MongoDB

## Debug

Create a `launch.json` file inside `.vscode` directory.

```
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "type": "node",
      "request": "launch",
      "args": ["${workspaceFolder}/src/index.ts"],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
    }
  ]
}
```