#!/usr/bin/env bash
# Build Tra (Rust + WASM, via Trunk) on Vercel.
# Vercel's build image has no Rust toolchain, so install rustup + Trunk here.
set -euo pipefail

export PATH="$HOME/.cargo/bin:$HOME/.local/bin:$PATH"

if ! command -v rustup >/dev/null 2>&1; then
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs \
    | sh -s -- -y --profile minimal --default-toolchain stable
fi

rustup update stable
rustup default stable
rustup target add wasm32-unknown-unknown

if ! command -v trunk >/dev/null 2>&1; then
  mkdir -p "$HOME/.local/bin"
  curl -fsSL https://github.com/trunk-rs/trunk/releases/latest/download/trunk-x86_64-unknown-linux-musl.tar.gz \
    | tar -xz -C "$HOME/.local/bin"
fi

rustc --version
trunk --version

trunk build --release --public-url /
