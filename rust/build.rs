fn main() -> Result<(), Box<dyn std::error::Error>> {
    tonic_build::compile_protos("../proto/git-repo-manager.proto")?;
    tonic_build::compile_protos("../proto/pomegranate.proto")?;

    Ok(())
}
