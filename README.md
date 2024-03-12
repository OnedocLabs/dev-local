<img width="1511" alt="dev-local" src="https://github.com/OnedocLabs/dev-local/assets/62055769/23da6d24-2f63-45c6-b948-33e6f17f1f0c">

<div align="center"><strong>Dev Local</strong></div>
<div align="center">The new way to build documents.<br />High-quality, unstyled components for creating PDFs.</div>
<br />
<div align="center">
<a href="https://www.onedoclabs.com/">Website</a>
<span> · </span>
<a href="https://github.com/OnedocLabs/react-print">GitHub</a>
<span> · </span>
<a href="https://discord.com/invite/uRJE6e2rgr">Discord</a>
<span> · </span>
<a href="https://docs.onedoclabs.com">Documentation</a>
</div>

---

# Getting started

## 1. Installation

Clone the repository.

```
npm install
```

## 2. Set up environment

- Copy the .env.example file to .env and fill in the required fields.

```yaml
ONEDOC_API_KEY="your_api_key"
```

- For a live rendering experience, split your IDE in two views, and open invoice.pdf in your right tab. You can use the [PDF Viewer](https://marketplace.visualstudio.com/items?itemName=mathematic.vscode-pdf) extension if you are using VS Code.

## 3. Render your first document$

```
npm run render
```

## 4. Have fun !

Build and render documents of your own in just one command line !

## 5. Remove the watermark

By default, this repository has `test: true` enabled in `./src/render.tsx`. This will add a small watermark to your document and will prevent your account from being charged. To remove the watermark, set `test: false` in `./src/render.tsx`.
