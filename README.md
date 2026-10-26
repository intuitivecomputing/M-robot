# Introducing M: A Modular, Modifiable Social Robot

Victor Nikhil Antony\*, Zhili Gong\*, Yoonjae Kim, Chien-Ming Huang. *IEEE Robotics and Automation Letters (RA-L), 2026.* \*Equal contribution.

M is an open-source, low-cost socially assistive robot platform designed to make SAR research easier to reproduce, modify, and deploy outside the lab.

<!-- TODO(release): add the IEEE Xplore / DOI link once published. -->

- **Paper**: https://arxiv.org/abs/2603.19134
- **Project website**: https://m-website-taupe.vercel.app. It hosts the build guide, bill of materials, and CAD files.
- **Documentation**: https://m-website-docs.vercel.app
- **Robot software (ROS 2)**: https://github.com/intuitivecomputing/m-robot-codebase

This repository contains the source for the project website and the documentation site.

## Repository layout

| Path | What it is |
| --- | --- |
| `apps/M-website` | Project website: React + Vite + Tailwind. Covers the home page, the build guide, and the bill of materials. |
| `apps/M-website-docs` | Documentation site: Nuxt + [Docus](https://docus.dev). Content lives in `content/`. |
| `apps/plant-research-website` | A separate lab project website that shares this workspace. |

Paper metadata and every outbound link used by the website (paper, code, CAD, docs, contact) are defined in [`apps/M-website/src/app/data/project.ts`](apps/M-website/src/app/data/project.ts).

## Development

This is an npm workspace driven by [Turborepo](https://turbo.build).

```bash
npm install
npm run dev      # run all apps in dev mode
npm run build    # build all apps
```

To work on a single app:

```bash
npm run dev -w M-website
npm run dev -w M-website-docs
```

## Deployment

The apps are deployed to Vercel. `./deploy.sh` creates preview deployments of each app, and `./deploy.sh --prod` deploys to production. On the main site, `/docs` is rewritten to the docs deployment (see `apps/M-website/vercel.json`).

## License

- Website and documentation **source code**: [MIT](LICENSE)
- **Robot software**: MIT, see [m-robot-codebase](https://github.com/intuitivecomputing/m-robot-codebase)
- **Hardware design files (CAD)**: CERN-OHL-P-2.0 <!-- TODO(release): confirm -->
- **Build guide, documentation text, images, and videos**: CC BY 4.0 <!-- TODO(release): confirm -->

## Citation

If you use M in your research, please cite our paper:

```bibtex
@article{antony2026introducing,
  title         = {Introducing {M}: A Modular, Modifiable Social Robot},
  author        = {Antony, Victor Nikhil and Gong, Zhili and Kim, Yoonjae and Huang, Chien-Ming},
  journal       = {IEEE Robotics and Automation Letters},
  year          = {2026},
  eprint        = {2603.19134},
  archivePrefix = {arXiv},
  primaryClass  = {cs.RO}
}
```
