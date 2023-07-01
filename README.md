# PaaSTech Proto Definitions

Welcome to the PaaSTech Proto Definitions repository!

This repository contains the protocol buffer definitions for PaaSTech Cloud services.

This README provides instructions on how to use the proto definitions and how to add new ones.

## Usage

Using the PaaSTech Proto Definitions is straightforward.

Just follow these simple steps:

### With JS/TS

1. Open your `package.json` file in your project.
2. Under the `dependencies` section, add the following line:

```json
"dependencies": {
  // ...
  "paastech-proto": "github:paastech-cloud/proto#main"
}
```

you will both find .proto files and ts type definitions in the `node_modules/paastech-proto` folder.

### With Rust

1. Open your `Cargo.toml` file in your project.
2. Under the `[dependencies]` section, add the following line:

```toml
[dependencies]
# ...
paastech-proto = { git = "https://github.com/paastech-cloud/proto.git", branch = "main" }
```

Alternatively, you can specify a specific version using a commit hash:

```toml
[dependencies]
# ...
paastech-proto = { git = "https://github.com/paastech-cloud/proto.git", rev = "1520c87" }
```

> ℹ️ Note that using `rev` is more stable, because with `branch` the code can change at any time.

3. That's it!! :tada:  
   You're all set to use the PaaSTech Proto Definitions in your project.  
   For example, you can import a specific proto package using the `use` keyword:

```rust
use paastech_proto::your_proto_package;
```

Source: [The Cargo Book - Specifying dependencies from git repositories
](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories)

## How to add a proto definition

To contribute a new proto definition, please follow these steps:

1. Fork this repository or create a new branch for your changes.
2. In the `proto/` directory, add your `.proto` file.
3. In the `src/lib.rs` file, add a new module with the name of your proto package.  
   Make sure to include the macro `tonic::include_proto!()` in this module.
4. In the `build.rs` file, add a line to compile your proto file using the `tonic_build::compile_protos()` macro.
   Specify the path to your proto file in the function call.
5. Run `npm run generate:proto` to generate the TS type definitions.
6. Create a pull request with your changes.

Once your pull request is reviewed and merged, your proto definition will be available for others to use.
