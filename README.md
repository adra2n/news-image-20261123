# 23 November 2026: the world in one image

A single 1024×1024 poster that sums up the world news of Monday 23 November 2026, one plate per story, arranged so the day reads at a glance.

The six stories it carries:

- **Libya** — Ukrainian sea drones sink the Russian corvette *Merkury* at a Libyan port.
- **Poland** — three Russian cruise missiles cross into Poland, which calls an emergency NATO session.
- **Antalya** — COP31 ends without a deal.
- **Santa Clara** — Nvidia's board reinstates Jensen Huang as chief executive.
- **Washington** — Representative Jimmy Gomez resigns after the House Ethics Committee's finding.
- **United States** — the most expensive Thanksgiving travel season in years.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` (the rendered poster, next to `main.ts`) to `<MAKEFUN_OUTPUT_DIR>/entry.png`, creating the directory if needed, and prints the destination with the number of bytes written. The default output directory is `/output`. No network, no other files touched; two runs write identical bytes.
