import os from 'os'
import { uptime } from 'process';

console.log(os.platform());         //win32

console.log(os.arch());            // x64

console.log(os.type());          //Windows_NT

console.log(os.cpus());           // {
                                    //     model: '13th Gen Intel(R) Core(TM) i5-1334U',
                                    //     speed: 2496,
                                    //     times: { user: 202062, nice: 0, sys: 253671, idle: 1682359, irq: 26531 }
                                    //   },

console.log(uptime());           //0.0505491


