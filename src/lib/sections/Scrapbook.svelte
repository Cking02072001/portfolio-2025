<script lang="ts">
    import { tick } from 'svelte';
    import Doodle from '$lib/components/Doodle.svelte';

    const SPREAD_W = 960;
    const SPREAD_H = 540;

    // ─── Sticker artwork (schwarz/weiß + Akzente) ─────────────────────────────

    const stickerSvgs: Record<string, string> = {
        star:    `<polygon points="20,3 24.5,14.5 37,14.5 27,22 30.5,34 20,27 9.5,34 13,22 3,14.5 15.5,14.5" fill="#923c56"/>`,
        heart:   `<path d="M20,34C20,34,5,23,5,14C5,9,9,5.5,13.5,5.5C16.5,5.5,18.5,7.5,20,10C21.5,7.5,23.5,5.5,26.5,5.5C31,5.5,35,9,35,14C35,23,20,34,20,34Z" fill="none" stroke="#272727" stroke-width="2"/>`,
        sparkle: `<path d="M20,4L21.5,18.5L36,20L21.5,21.5L20,36L18.5,21.5L4,20L18.5,18.5Z" fill="#272727"/>`,
        flower:  `<circle cx="20" cy="20" r="5" fill="#272727"/><ellipse cx="20" cy="9" rx="4" ry="7" fill="none" stroke="#272727" stroke-width="1.6"/><ellipse cx="20" cy="31" rx="4" ry="7" fill="none" stroke="#272727" stroke-width="1.6"/><ellipse cx="9" cy="20" rx="7" ry="4" fill="none" stroke="#272727" stroke-width="1.6"/><ellipse cx="31" cy="20" rx="7" ry="4" fill="none" stroke="#272727" stroke-width="1.6"/>`,
        smile:   `<circle cx="20" cy="20" r="16" fill="none" stroke="#272727" stroke-width="2"/><circle cx="14" cy="16" r="2.5" fill="#272727"/><circle cx="26" cy="16" r="2.5" fill="#272727"/><path d="M13,26 Q20,32 27,26" fill="none" stroke="#272727" stroke-width="2" stroke-linecap="round"/>`,
        arrow:   `<path d="M5,22L28,22L28,28L38,20L28,12L28,18L5,18Z" fill="#272727"/>`,
        wave:    `<path d="M2,20 Q8,8 14,20 T26,20 T38,20" fill="none" stroke="#923c56" stroke-width="2.5" stroke-linecap="round"/>`,
        bolt:    `<polygon points="24,4 10,22 19,22 16,36 30,18 21,18" fill="none" stroke="#272727" stroke-width="2" stroke-linejoin="round"/>`,
        circle:  `<circle cx="20" cy="20" r="14" fill="none" stroke="#d3546d" stroke-width="2.5" stroke-dasharray="3 5" stroke-linecap="round"/>`,
        starline:`<path d="M20,4L22,18L36,20L22,22L20,36L18,22L4,20L18,18Z" fill="none" stroke="#923c56" stroke-width="2"/>`,
    };

    const stickerIds = Object.keys(stickerSvgs);

    // ─── Items ────────────────────────────────────────────────────────────────

    type ItemType = 'polaroid' | 'text' | 'postit' | 'sticker' | 'stamp' | 'tape' | 'pill' | 'music';

    interface Item {
        id: string;
        type: ItemType;
        x: number;
        y: number;
        rot: number;
        z: number;
        img?: string | null;
        caption?: string;
        text?: string;
        size?: number;
        color?: string;
        hl?: string;
        defId?: string;
        scale?: number;
        removable?: boolean;
    }

    const uid = () => Math.random().toString(36).slice(2, 10);
    let zSeed = 1;

    // Profilbild: meist das klassische, selten (5%) das Easter-Egg
    const profileImg = Math.random() < 0.05
        ? '/Photos/CK/Profil-2.jpg'
        : '/Photos/CK/Profil.jpg';

    const P  = (img: string, caption: string, x: number, y: number, rot: number): Item =>
        ({ id: uid(), type: 'polaroid', img, caption, x, y, rot, z: zSeed++ });
    const T  = (text: string, x: number, y: number, rot: number, size = 18, color = '#272727', hl = ''): Item =>
        ({ id: uid(), type: 'text', text, x, y, rot, size, color, hl, z: zSeed++ });
    const N  = (text: string, x: number, y: number, rot: number, color = '#fff'): Item =>
        ({ id: uid(), type: 'postit', text, x, y, rot, color, z: zSeed++ });
    const ST = (text: string, x: number, y: number, rot: number): Item =>
        ({ id: uid(), type: 'stamp', text, x, y, rot, z: zSeed++ });
    const TP = (x: number, y: number, rot: number, color?: string): Item =>
        ({ id: uid(), type: 'tape', x, y, rot, color, z: zSeed++ });
    const PI = (text: string, x: number, y: number, rot: number): Item =>
        ({ id: uid(), type: 'pill', text, x, y, rot, z: zSeed++ });
    const SK = (defId: string, x: number, y: number, rot: number, scale = 1): Item =>
        ({ id: uid(), type: 'sticker', defId, x, y, rot, scale, z: zSeed++ });

    let spreads = $state<Item[][]>([
        [
            // ── Seite 1: Ich als Mensch ──
            ST('ICH ALS MENSCH', 42, 36, -3),
            { id: uid(), type: 'polaroid', img: profileImg, caption: 'das bin ich', x: 58, y: 92, rot: -4, z: zSeed++ },
            TP(96, 82, -22, 'rgba(146,60,86,0.28)'),
            PI('ehrgeizig',   268, 112, -2),
            PI('emotional',   278, 164,  1.5),
            PI('eigenwillig', 262, 216, -1),
            T('drei worte, ganz ehrlich', 268, 272, -2, 16),
            N('was ich liebe:\nberge & natur\nmusik & konzerte\nreisen', 64, 372, -2),
            T('immer neugierig bleiben', 236, 332, -3, 19, '#923c56'),
            SK('heart', 398, 64, -12),
            ST('MADE IN TIROL', 330, 474, -4),
            T('ich bin celina —', 540, 70, -1, 32),
            T('grafik- & ux-designerin aus tirol', 546, 122, -1.5, 22),
            T('gestaltet mit kopf, herz & dickkopf', 542, 160, -1, 20, '#272727', 'rgba(211,84,109,0.16)'),
            { id: uid(), type: 'music', x: 560, y: 300, rot: -2, z: zSeed++ },
            TP(622, 290, 12),
            SK('wave', 800, 120, 8, 1.1),
            SK('starline', 876, 426, -10),
        ],
        [
            P('/Photos/CK/21-Polaroid.jpg',  "new york, '26",  48,  64,  -4),
            P('/Photos/CK/268-Polaroid.jpg', 'skyline, nyc',   545, 58,   2.5),
            T('meine welt in bildern', 555, 330, -2, 26, '#272727', 'rgba(146,60,86,0.18)'),
            T('always creating ✦',     720, 390,  1.5, 17, '#923c56'),
            T('2025',                  860, 60,  -8, 30, '#272727'),
            N('ideen:\nmehr zeichnen\nmehr fotos ✦', 90, 350, -3, '#d3546d'),
            ST('EST. 2025', 320, 450, -4),
            TP(85, 52, -28),
            TP(605, 48, 18, 'rgba(146,60,86,0.28)'),
        ],
        [
            P('/Photos/CK/657-Polaroid.jpg', 'big apple',      70,  85,   3),
            P('/Photos/CK/714-Polaroid.jpg', 'streets of ny', 270, 230, -2.5),
            P('/Photos/CK/111-Polaroid.jpg', "nyc, '26",      745, 200,  2),
            T('einfach machen', 95, 330, -2, 24, '#272727', 'rgba(211,84,109,0.2)'),
            T('Celina ♡',       590, 420, 1.5, 22, '#923c56'),
            N('nicht vergessen:\nspielen erlaubt ✦', 380, 60, 4),
            ST('TIROL', 850, 460, 3),
            TP(108, 74, 22),
            TP(782, 188, -16),
        ],
    ]);

    let zTop = $state(100);

    // ─── Spread navigation ────────────────────────────────────────────────────

    let currentSpread = $state(0);
    let targetSpread  = $state<number | null>(null);
    let isFlipping    = $state(false);
    let flipDir       = $state<'next' | 'prev'>('next');

    function addBlankSpread() {
        if (isFlipping) return;
        spreads.push([]);
        goToIndex(spreads.length - 1);
    }

    async function goToIndex(dest: number) {
        if (isFlipping || dest === currentSpread || dest < 0 || dest >= spreads.length) return;
        flipDir = dest > currentSpread ? 'next' : 'prev';
        targetSpread = dest;
        isFlipping = true;
        await tick();
        setTimeout(() => {
            currentSpread = dest;
            targetSpread = null;
            isFlipping = false;
        }, 550);
    }

    async function goTo(dir: 'next' | 'prev') {
        if (isFlipping) return;
        const dest = dir === 'next' ? currentSpread + 1 : currentSpread - 1;
        if (dest < 0 || dest >= spreads.length) return;
        flipDir = dir;
        targetSpread = dest;
        isFlipping = true;
        await tick();
        setTimeout(() => {
            currentSpread = dest;
            targetSpread = null;
            isFlipping = false;
        }, 550);
    }

    // ─── Werkzeuge ────────────────────────────────────────────────────────────

    type Tool = 'none' | 'pen' | 'marker-wine' | 'marker-pink' | 'eraser';
    let activeTool = $state<Tool>('none');

    function toggleTool(t: Tool) {
        activeTool = activeTool === t ? 'none' : t;
    }

    const cursorOf = (svg: string, hx: number, hy: number) =>
        `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hx} ${hy}, crosshair`;

    const cursors: Record<string, string> = {
        'pen':         cursorOf(`<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path d='M3 27 L7 17 L23 1 L29 7 L13 23 Z' fill='#272727' stroke='#fbf9f9' stroke-width='1.2'/></svg>`, 3, 27),
        'marker-wine': cursorOf(`<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path d='M3 27 L9 15 L23 1 L29 7 L15 21 Z' fill='#923c56' stroke='#fbf9f9' stroke-width='1.2'/></svg>`, 3, 27),
        'marker-pink': cursorOf(`<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path d='M3 27 L9 15 L23 1 L29 7 L15 21 Z' fill='#d3546d' stroke='#fbf9f9' stroke-width='1.2'/></svg>`, 3, 27),
        'eraser':      cursorOf(`<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><rect x='4' y='10' width='22' height='14' rx='3' fill='#fbf9f9' stroke='#272727' stroke-width='2'/></svg>`, 15, 17),
    };

    // ─── Zeichnen ─────────────────────────────────────────────────────────────

    let canvasEls = $state<(HTMLCanvasElement | undefined)[]>([undefined, undefined, undefined]);
    let spreadsEl = $state<HTMLDivElement | undefined>(undefined);
    let isDrawing = false;
    let lastX = 0, lastY = 0;

    function spreadPoint(clientX: number, clientY: number): [number, number] {
        const r = spreadsEl!.getBoundingClientRect();
        return [
            (clientX - r.left) * (SPREAD_W / r.width),
            (clientY - r.top)  * (SPREAD_H / r.height),
        ];
    }

    function drawDown(e: PointerEvent) {
        if (activeTool === 'none') return;
        e.preventDefault();
        const canvas = canvasEls[currentSpread];
        if (!canvas) return;
        canvas.setPointerCapture(e.pointerId);
        isDrawing = true;
        [lastX, lastY] = spreadPoint(e.clientX, e.clientY);
    }

    function drawMove(e: PointerEvent) {
        if (!isDrawing || activeTool === 'none') return;
        const canvas = canvasEls[currentSpread];
        if (!canvas) return;
        const [x, y] = spreadPoint(e.clientX, e.clientY);
        const ctx = canvas.getContext('2d')!;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        if (activeTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = 26;
            ctx.strokeStyle = 'rgba(0,0,0,1)';
            ctx.globalAlpha = 1;
        } else if (activeTool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.lineWidth = 2.5;
            ctx.strokeStyle = '#272727';
            ctx.globalAlpha = 1;
        } else {
            ctx.globalCompositeOperation = 'source-over';
            ctx.lineWidth = 15;
            ctx.strokeStyle = activeTool === 'marker-wine' ? '#923c56' : '#d3546d';
            ctx.globalAlpha = 0.3;
        }

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
        lastX = x;
        lastY = y;
    }

    function drawUp() { isDrawing = false; }

    function clearDrawing() {
        const c = canvasEls[currentSpread];
        c?.getContext('2d')!.clearRect(0, 0, SPREAD_W, SPREAD_H);
    }

    // ─── Items verschieben ────────────────────────────────────────────────────

    let drag: { spread: number; id: string; dx: number; dy: number; moved: boolean } | null = null;

    function itemDown(e: PointerEvent, spreadIdx: number, item: Item) {
        if (activeTool !== 'none') return;
        const target = e.target as HTMLElement;
        if (target.closest('[data-nodrag]')) return;
        e.preventDefault();
        const [px, py] = spreadPoint(e.clientX, e.clientY);
        item.z = ++zTop;
        drag = { spread: spreadIdx, id: item.id, dx: px - item.x, dy: py - item.y, moved: false };
    }

    function windowMove(e: PointerEvent) {
        if (drag) {
            const item = spreads[drag.spread].find(i => i.id === drag!.id);
            if (item) {
                const [px, py] = spreadPoint(e.clientX, e.clientY);
                item.x = px - drag.dx;
                item.y = py - drag.dy;
                drag.moved = true;
            }
        }
        if (deskGhost) {
            deskGhost.cx = e.clientX;
            deskGhost.cy = e.clientY;
        }
    }

    function windowUp(e: PointerEvent) {
        if (drag) {
            const item = spreads[drag.spread].find(i => i.id === drag!.id);
            if (item && !drag.moved && item.type === 'polaroid' && item.img === null) {
                openUpload(drag.spread, item.id);
            }
            drag = null;
        }
        if (deskGhost) {
            const r = spreadsEl?.getBoundingClientRect();
            if (r && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
                const [px, py] = spreadPoint(e.clientX, e.clientY);
                if (deskGhost.kind === 'polaroid') {
                    spreads[currentSpread].push({
                        id: uid(), type: 'polaroid', img: null, caption: '',
                        x: px - 75, y: py - 80,
                        rot: Math.random() * 8 - 4, z: ++zTop, removable: true,
                    });
                } else if (deskGhost.kind === 'postit') {
                    spreads[currentSpread].push({
                        id: uid(), type: 'postit', text: 'notiz...', color: deskGhost.color,
                        x: px - 59, y: py - 52,
                        rot: Math.random() * 8 - 4, z: ++zTop, removable: true,
                    });
                    padIdx = (padIdx + 1) % padColors.length;
                } else if (deskGhost.kind === 'tape') {
                    spreads[currentSpread].push({
                        id: uid(), type: 'tape', color: deskGhost.color,
                        x: px - 35, y: py - 9,
                        rot: Math.random() * 60 - 30, z: ++zTop, removable: true,
                    });
                    tapeIdx = (tapeIdx + 1) % tapeColors.length;
                } else {
                    spreads[currentSpread].push({
                        id: uid(), type: 'sticker', defId: deskGhost.defId,
                        x: px - 22, y: py - 22,
                        rot: Math.random() * 40 - 20, scale: 0.85 + Math.random() * 0.5,
                        z: ++zTop, removable: true,
                    });
                }
            }
            deskGhost = null;
        }
    }

    function removeItem(spreadIdx: number, id: string) {
        spreads[spreadIdx] = spreads[spreadIdx].filter(i => i.id !== id);
    }

    function onKeydown(e: KeyboardEvent) {
        if (e.key === 'Escape') activeTool = 'none';
    }

    // ─── Vom Tisch ins Buch ziehen ────────────────────────────────────────────

    type DeskKind = 'polaroid' | 'sticker' | 'postit' | 'tape';
    let deskGhost = $state<{ kind: DeskKind; defId?: string; color?: string; cx: number; cy: number } | null>(null);

    // Farbwechsel: weiß → weinrot → pink
    const padColors  = ['#fff', '#923c56', '#d3546d'];
    const tapeColors = ['rgba(39,39,39,0.13)', 'rgba(146,60,86,0.28)', 'rgba(211,84,109,0.28)'];
    let padIdx  = $state(0);
    let tapeIdx = $state(0);

    function deskDown(e: PointerEvent, kind: DeskKind, defId?: string) {
        if (activeTool !== 'none') return;
        e.preventDefault();
        const color = kind === 'postit' ? padColors[padIdx]
                    : kind === 'tape'   ? tapeColors[tapeIdx]
                    : undefined;
        deskGhost = { kind, defId, color, cx: e.clientX, cy: e.clientY };
    }

    // ─── Foto-Upload ──────────────────────────────────────────────────────────

    let fileInput = $state<HTMLInputElement | undefined>(undefined);
    let uploadTarget: { spread: number; id: string } | null = null;

    function openUpload(spreadIdx: number, id: string) {
        uploadTarget = { spread: spreadIdx, id };
        fileInput?.click();
    }

    function onFileChosen() {
        const file = fileInput?.files?.[0];
        if (!file || !uploadTarget) return;
        const item = spreads[uploadTarget.spread].find(i => i.id === uploadTarget!.id);
        if (item) item.img = URL.createObjectURL(file);
        uploadTarget = null;
        if (fileInput) fileInput.value = '';
    }

    // ─── Skalierung ───────────────────────────────────────────────────────────

    let bookW = $state(960);
    const bookScale = $derived(Math.min(bookW, SPREAD_W) / SPREAD_W);

    // ─── Polaroid "Entwickeln" beim Scrollen ──────────────────────────────────

    let sectionEl = $state<HTMLElement | undefined>(undefined);
    let developed = $state(false);

    $effect(() => {
        if (!sectionEl || developed) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    developed = true;
                    obs.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        obs.observe(sectionEl);
        return () => obs.disconnect();
    });
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
</svelte:head>

<svelte:window onpointermove={windowMove} onpointerup={windowUp} onkeydown={onKeydown} />

<section class="scrapbook-section" class:developed bind:this={sectionEl}>

    <div class="title-column">
        <h1>Das Scrapbook</h1>
        <div class="title-hint" aria-hidden="true">
            <span>blätter durch & spiel dich</span>
            <Doodle variant="arrow" size={54} rotate={42} flip />
        </div>
    </div>

    <div class="desk">

        <!-- Werkzeuge links -->
        <div class="tools">
            <span class="hint">nimm dir was ✦</span>

            <button
                class="tool"
                class:held={activeTool === 'pen'}
                onclick={() => toggleTool('pen')}
                aria-label="Stift {activeTool === 'pen' ? 'weglegen' : 'aufnehmen'}"
                aria-pressed={activeTool === 'pen'}
                title="Stift"
            >
                <svg viewBox="0 0 90 22" width="90" height="22" aria-hidden="true">
                    <rect x="14" y="7" width="62" height="8" rx="4" fill="#272727"/>
                    <polygon points="14,7 2,11 14,15" fill="#272727"/>
                    <polygon points="6,9.7 2,11 6,12.3" fill="#fbf9f9"/>
                    <rect x="70" y="6" width="8" height="10" rx="2" fill="#555"/>
                </svg>
            </button>

            <button
                class="tool"
                class:held={activeTool === 'marker-wine'}
                onclick={() => toggleTool('marker-wine')}
                aria-label="Marker Weinrot {activeTool === 'marker-wine' ? 'weglegen' : 'aufnehmen'}"
                aria-pressed={activeTool === 'marker-wine'}
                title="Marker"
            >
                <svg viewBox="0 0 90 24" width="90" height="24" aria-hidden="true">
                    <rect x="22" y="5" width="56" height="14" rx="4" fill="#272727"/>
                    <rect x="6" y="7" width="18" height="10" rx="2" fill="#923c56"/>
                    <polygon points="6,9 1,12 6,15" fill="#923c56"/>
                </svg>
            </button>

            <button
                class="tool"
                class:held={activeTool === 'marker-pink'}
                onclick={() => toggleTool('marker-pink')}
                aria-label="Marker Pink {activeTool === 'marker-pink' ? 'weglegen' : 'aufnehmen'}"
                aria-pressed={activeTool === 'marker-pink'}
                title="Marker"
            >
                <svg viewBox="0 0 90 24" width="90" height="24" aria-hidden="true">
                    <rect x="22" y="5" width="56" height="14" rx="4" fill="#272727"/>
                    <rect x="6" y="7" width="18" height="10" rx="2" fill="#d3546d"/>
                    <polygon points="6,9 1,12 6,15" fill="#d3546d"/>
                </svg>
            </button>

            <button
                class="tool"
                class:held={activeTool === 'eraser'}
                onclick={() => toggleTool('eraser')}
                aria-label="Radiergummi {activeTool === 'eraser' ? 'weglegen' : 'aufnehmen'}"
                aria-pressed={activeTool === 'eraser'}
                title="Radiergummi"
            >
                <svg viewBox="0 0 70 26" width="70" height="26" aria-hidden="true">
                    <rect x="4" y="4" width="62" height="18" rx="5" fill="#fbf9f9" stroke="#272727" stroke-width="2"/>
                    <rect x="4" y="4" width="22" height="18" rx="5" fill="#272727"/>
                </svg>
            </button>

            {#if activeTool !== 'none'}
                <button class="text-action" onclick={clearDrawing}>löschen</button>
            {/if}
        </div>

        <!-- Das Journal -->
        <div class="book" bind:clientWidth={bookW} style="height:{SPREAD_H * bookScale}px;">
            <div
                class="spreads"
                bind:this={spreadsEl}
                style="transform:scale({bookScale}); cursor:{activeTool !== 'none' ? cursors[activeTool] : 'default'};"
                class:tool-active={activeTool !== 'none'}
            >
                {#each spreads as items, sIdx}
                    {@const isActive  = sIdx === currentSpread}
                    {@const isTarget  = sIdx === targetSpread}
                    <div
                        class="spread"
                        class:visible={isActive || isTarget}
                        class:exit-left={isFlipping && isActive && flipDir === 'next'}
                        class:exit-right={isFlipping && isActive && flipDir === 'prev'}
                        class:enter-right={isFlipping && isTarget && flipDir === 'next'}
                        class:enter-left={isFlipping && isTarget && flipDir === 'prev'}
                    >
                        <div class="page-left" aria-hidden="true"></div>
                        <div class="page-right" aria-hidden="true"></div>
                        <div class="spine-shadow" aria-hidden="true"></div>

                        {#each items as item, iIdx (item.id)}
                            {#if item.type === 'polaroid'}
                                <div
                                    class="item polaroid"
                                    class:empty={item.img === null}
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    {#if item.img}
                                        <img src={item.img} alt={item.caption || 'Foto'} draggable="false" loading="lazy" style="transition-delay:{(iIdx % 5) * 0.2}s;" />
                                    {:else}
                                        <div class="upload-slot">
                                            <span>foto +</span>
                                        </div>
                                    {/if}
                                    <span class="pol-caption">{item.caption}</span>
                                    {#if item.removable}
                                        <button class="del" data-nodrag onclick={() => removeItem(sIdx, item.id)} aria-label="Entfernen">×</button>
                                    {/if}
                                </div>
                            {:else if item.type === 'text'}
                                <div
                                    class="item handtext"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z}; font-size:{item.size}px; color:{item.color};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    <span style={item.hl ? `background:${item.hl}; padding:2px 8px;` : ''}>{item.text}</span>
                                </div>
                            {:else if item.type === 'postit'}
                                <div
                                    class="item postit"
                                    class:dark={!!item.color && item.color !== '#fff'}
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z}; background:{item.color ?? '#fff'};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    <div class="postit-tape" aria-hidden="true"></div>
                                    <div
                                        class="postit-body"
                                        contenteditable="true"
                                        data-nodrag
                                        bind:textContent={item.text}
                                        role="textbox"
                                        aria-label="Notiz bearbeiten"
                                        tabindex="0"
                                    ></div>
                                    {#if item.removable}
                                        <button class="del" data-nodrag onclick={() => removeItem(sIdx, item.id)} aria-label="Entfernen">×</button>
                                    {/if}
                                </div>
                            {:else if item.type === 'tape'}
                                <div
                                    class="item tape-strip"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z}; background:{item.color ?? 'rgba(39,39,39,0.13)'};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    {#if item.removable}
                                        <button class="del" data-nodrag onclick={() => removeItem(sIdx, item.id)} aria-label="Entfernen">×</button>
                                    {/if}
                                </div>
                            {:else if item.type === 'pill'}
                                <div
                                    class="item pill"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >{item.text}</div>
                            {:else if item.type === 'music'}
                                <div
                                    class="item music"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    <span class="music-label">gerade höre ich</span>
                                    <span class="music-song">Dracula</span>
                                    <span class="music-artist">Tame Impala</span>
                                    <div class="music-eq" aria-hidden="true">
                                        <span></span><span></span><span></span><span></span><span></span><span></span>
                                    </div>
                                </div>
                            {:else if item.type === 'stamp'}
                                <div
                                    class="item stamp"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg); z-index:{item.z};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >{item.text}</div>
                            {:else if item.type === 'sticker'}
                                <div
                                    class="item sticker"
                                    style="left:{item.x}px; top:{item.y}px; transform:rotate({item.rot}deg) scale({item.scale}); z-index:{item.z};"
                                    onpointerdown={(e) => itemDown(e, sIdx, item)}
                                >
                                    <svg viewBox="0 0 40 40" width="44" height="44">
                                        {@html stickerSvgs[item.defId!] ?? ''}
                                    </svg>
                                    {#if item.removable}
                                        <button class="del" data-nodrag onclick={() => removeItem(sIdx, item.id)} aria-label="Entfernen">×</button>
                                    {/if}
                                </div>
                            {/if}
                        {/each}

                        <canvas
                            class="draw-canvas"
                            class:active={activeTool !== 'none' && isActive}
                            width={SPREAD_W}
                            height={SPREAD_H}
                            bind:this={canvasEls[sIdx]}
                            onpointerdown={isActive ? drawDown : undefined}
                            onpointermove={isActive ? drawMove : undefined}
                            onpointerup={isActive ? drawUp : undefined}
                            onpointerleave={isActive ? drawUp : undefined}
                        ></canvas>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Rechts: Polaroid-Stapel & Sticker -->
        <div class="side">
            <div class="stack-wrap">
                <span class="hint">eigene fotos ↓</span>
                <button
                    class="stack"
                    onpointerdown={(e) => deskDown(e, 'polaroid')}
                    aria-label="Leeres Polaroid ins Buch ziehen"
                >
                    <div class="stack-card c3" aria-hidden="true"></div>
                    <div class="stack-card c2" aria-hidden="true"></div>
                    <div class="stack-card c1" aria-hidden="true">
                        <div class="stack-inner"></div>
                    </div>
                </button>
            </div>

            <div class="pad-wrap">
                <span class="hint">post-its ↓</span>
                <button
                    class="postit-pad"
                    onpointerdown={(e) => deskDown(e, 'postit')}
                    aria-label="Post-it ins Buch ziehen"
                >
                    <div class="pad-layer l3" aria-hidden="true" style="background:{padColors[(padIdx + 2) % 3]};"></div>
                    <div class="pad-layer l2" aria-hidden="true" style="background:{padColors[(padIdx + 1) % 3]};"></div>
                    <div class="pad-layer l1" aria-hidden="true" class:dark={padColors[padIdx] !== '#fff'} style="background:{padColors[padIdx]};"><span>✦</span></div>
                </button>
            </div>

            <div class="tape-wrap">
                <span class="hint">tape ↓</span>
                <button
                    class="tape-roll"
                    onpointerdown={(e) => deskDown(e, 'tape')}
                    aria-label="Klebestreifen ins Buch ziehen"
                >
                    <svg viewBox="0 0 64 44" width="64" height="44" aria-hidden="true">
                        <circle cx="30" cy="20" r="17" fill="none" stroke="#272727" stroke-width="2.5"/>
                        <circle cx="30" cy="20" r="7" fill="none" stroke="#272727" stroke-width="2"/>
                        <path d="M45 28 L62 36 L62 41 L42 33" fill={tapeColors[tapeIdx]} stroke="#272727" stroke-width="1"/>
                    </svg>
                </button>
            </div>

            <div class="sheet-wrap">
                <span class="hint">sticker ↓</span>
                <div class="sheet">
                    {#each stickerIds as sid}
                        <button
                            class="sheet-sticker"
                            onpointerdown={(e) => deskDown(e, 'sticker', sid)}
                            aria-label="Sticker ins Buch ziehen"
                        >
                            <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
                                {@html stickerSvgs[sid]}
                            </svg>
                        </button>
                    {/each}
                </div>
            </div>
        </div>

    </div>

    <!-- Blättern -->
    <div class="page-nav">
        <button disabled={currentSpread === 0 || isFlipping} onclick={() => goTo('prev')}>
            ← zurück
        </button>
        <div class="page-dots" aria-label="Seite {currentSpread + 1} von {spreads.length}">
            {#each spreads as _, i}
                <div class="dot" class:active={i === currentSpread}></div>
            {/each}
        </div>
        <button disabled={currentSpread === spreads.length - 1 || isFlipping} onclick={() => goTo('next')}>
            umblättern →
        </button>
        <button class="add-page" disabled={isFlipping} onclick={addBlankSpread}>
            + neue seite
        </button>
    </div>

    <!-- Ghost beim Ziehen vom Tisch -->
    {#if deskGhost}
        <div class="ghost" style="left:{deskGhost.cx}px; top:{deskGhost.cy}px;" aria-hidden="true">
            {#if deskGhost.kind === 'polaroid'}
                <div class="ghost-polaroid"></div>
            {:else if deskGhost.kind === 'postit'}
                <div class="ghost-postit" style="background:{deskGhost.color ?? '#fff'};"></div>
            {:else if deskGhost.kind === 'tape'}
                <div class="ghost-tape" style="background:{deskGhost.color ?? 'rgba(39,39,39,0.2)'};"></div>
            {:else}
                <svg viewBox="0 0 40 40" width="40" height="40">
                    {@html stickerSvgs[deskGhost.defId!]}
                </svg>
            {/if}
        </div>
    {/if}

    <input
        type="file"
        accept="image/*"
        bind:this={fileInput}
        onchange={onFileChosen}
        style="display:none;"
        aria-hidden="true"
    />

</section>

<style lang="scss">
    .scrapbook-section {
        padding: var(--spacing-120) 5vw;
        background: var(--color-white);
        display: flex;
        flex-direction: column;
        gap: var(--spacing-40);
        overflow: hidden;
    }

    .title-column {
        display: flex;
        align-items: flex-end;
        gap: 28px;

        h1 {
            margin: 0;
            color: var(--color-black);
        }
    }

    .title-hint {
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 14px;
        font-family: 'Caveat', cursive;
        font-size: 20px;
        color: #999;
        white-space: nowrap;
    }

    // ── Tisch-Layout ─────────────────────────────────────────────────────────

    .desk {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }

    .hint {
        font-family: 'Caveat', cursive;
        font-size: 17px;
        color: #999;
        white-space: nowrap;
    }

    // ── Werkzeuge ────────────────────────────────────────────────────────────

    .tools {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 18px;
        flex-shrink: 0;
    }

    .tool {
        background: none;
        border: none;
        padding: 4px;
        cursor: pointer;
        transition: transform 0.2s ease, opacity 0.2s ease;
        line-height: 0;

        &:hover { transform: translateX(5px) rotate(-2deg); text-decoration: none; }

        &.held {
            opacity: 0.25;
            transform: translateY(-6px) rotate(-8deg);
        }
    }

    .text-action {
        background: none;
        border: none;
        font-family: var(--font-heading);
        font-size: 16px;
        color: var(--color-black);
        cursor: pointer;
        padding: 0;

        &:hover { text-decoration: underline; }
    }

    // ── Buch ─────────────────────────────────────────────────────────────────

    .book {
        flex: 0 1 960px;
        max-width: 960px;
        min-width: 0;
        position: relative;
    }

    .spreads {
        width: 960px;
        height: 540px;
        position: relative;
        transform-origin: top left;
        border: 10px solid #1d1d1d;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 14px 40px rgba(39, 39, 39, 0.18);
        overflow: hidden;
        user-select: none;
    }

    .spread {
        position: absolute;
        inset: 0;
        display: none;

        &.visible     { display: block; }
        &.exit-left   { animation: exitLeft   0.52s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        &.exit-right  { animation: exitRight  0.52s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        &.enter-right { animation: enterRight 0.52s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        &.enter-left  { animation: enterLeft  0.52s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    }

    @keyframes exitLeft {
        from { transform: perspective(1100px) translateX(0)     rotateY(0);      opacity: 1; }
        to   { transform: perspective(1100px) translateX(-105%) rotateY(9deg);   opacity: 0; }
    }
    @keyframes exitRight {
        from { transform: perspective(1100px) translateX(0)     rotateY(0);      opacity: 1; }
        to   { transform: perspective(1100px) translateX(105%)  rotateY(-9deg);  opacity: 0; }
    }
    @keyframes enterRight {
        from { transform: perspective(1100px) translateX(105%)  rotateY(-9deg);  opacity: 0; }
        to   { transform: perspective(1100px) translateX(0)     rotateY(0);      opacity: 1; }
    }
    @keyframes enterLeft {
        from { transform: perspective(1100px) translateX(-105%) rotateY(9deg);   opacity: 0; }
        to   { transform: perspective(1100px) translateX(0)     rotateY(0);      opacity: 1; }
    }

    .page-left,
    .page-right {
        position: absolute;
        top: 0; bottom: 0;
        width: 50%;
        background-color: #fff;
        background-image: radial-gradient(circle, rgba(39, 39, 39, 0.18) 1.2px, transparent 1.3px);
        background-size: 24px 24px;
        background-position: 12px 12px;
        pointer-events: none;
    }
    .page-left  { left: 0; }
    .page-right { right: 0; }

    .spine-shadow {
        position: absolute;
        left: 50%;
        top: 0; bottom: 0;
        width: 1px;
        background: rgba(39, 39, 39, 0.3);
        box-shadow: 0 0 22px 6px rgba(39, 39, 39, 0.12);
        pointer-events: none;
        z-index: 1;
    }

    // ── Items ────────────────────────────────────────────────────────────────

    .item {
        position: absolute;
        touch-action: none;
        cursor: grab;

        &:active { cursor: grabbing; }
    }

    .tool-active .item { pointer-events: none; }

    .del {
        position: absolute;
        top: -9px; right: -9px;
        width: 18px; height: 18px;
        border-radius: 50%;
        background: #272727;
        color: #fff;
        border: none;
        font-size: 13px;
        line-height: 1;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.15s;
    }

    .item:hover .del { opacity: 1; }

    .polaroid {
        width: 150px;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.25);
        padding: 9px 9px 32px;
        box-shadow: 0 3px 14px rgba(39, 39, 39, 0.18);

        img {
            width: 100%;
            height: 124px;
            object-fit: cover;
            display: block;
            // unentwickelt: schwarz-weiß, leicht überbelichtet
            filter: grayscale(1) contrast(0.92) brightness(1.06);
            transition: filter 1.6s ease;
            pointer-events: none;
        }

        .upload-slot {
            width: 100%;
            height: 124px;
            border: 1.5px dashed rgba(39, 39, 39, 0.35);
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-family: 'Caveat', cursive;
                font-size: 19px;
                color: #888;
            }
        }

        .pol-caption {
            position: absolute;
            bottom: 7px;
            left: 0; right: 0;
            text-align: center;
            font-family: 'Caveat', cursive;
            font-size: 15px;
            color: #272727;
        }
    }

    .scrapbook-section.developed .polaroid img {
        filter: grayscale(0.15) contrast(1) brightness(1);
    }

    .handtext {
        font-family: 'Caveat', cursive;
        line-height: 1.3;
        white-space: nowrap;
        font-weight: 600;
    }

    .postit {
        width: 118px;
        min-height: 104px;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.3);
        box-shadow: 0 3px 12px rgba(39, 39, 39, 0.14);
        padding: 16px 10px 10px;

        &.dark {
            border-color: rgba(39, 39, 39, 0.15);

            .postit-body { color: #fbf9f9; }
            .postit-tape { background: rgba(255, 255, 255, 0.32); border-color: rgba(255, 255, 255, 0.2); }
        }
    }

    .postit-tape {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%) rotate(-2deg);
        width: 46px;
        height: 15px;
        background: rgba(39, 39, 39, 0.14);
        border: 1px solid rgba(39, 39, 39, 0.08);
    }

    .postit-body {
        font-family: 'Caveat', cursive;
        font-size: 16px;
        line-height: 1.45;
        color: #272727;
        white-space: pre-wrap;
        outline: none;
        cursor: text;
        min-height: 60px;
    }

    .stamp {
        border: 1.5px solid #272727;
        border-radius: 3px;
        padding: 4px 10px;
        font-family: var(--font-reading);
        font-size: 11px;
        letter-spacing: 0.25em;
        color: #272727;
        opacity: 0.65;
        text-transform: uppercase;
    }

    .sticker svg { display: block; pointer-events: none; }

    .tape-strip {
        width: 70px;
        height: 18px;
        background: rgba(39, 39, 39, 0.13);
        border-left: 1px dashed rgba(39, 39, 39, 0.2);
        border-right: 1px dashed rgba(39, 39, 39, 0.2);
    }

    .pill {
        font-family: 'Caveat', cursive;
        font-size: 21px;
        font-weight: 600;
        color: #272727;
        background: #fff;
        border: 1.6px solid #272727;
        padding: 2px 16px;
        border-radius: 48% 52% 55% 45% / 60% 48% 52% 40%;
        white-space: nowrap;
    }

    .music {
        width: 180px;
        background: #272727;
        border-radius: 8px;
        padding: 12px 14px 10px;
        box-shadow: 0 4px 16px rgba(39, 39, 39, 0.28);
        display: flex;
        flex-direction: column;
        gap: 1px;

        .music-label {
            font-family: 'Caveat', cursive;
            font-size: 15px;
            color: #d3546d;
        }

        .music-song {
            font-family: var(--font-heading);
            font-size: 20px;
            color: #fbf9f9;
            line-height: 1.15;
        }

        .music-artist {
            font-family: var(--font-reading);
            font-size: 11px;
            letter-spacing: 0.08em;
            color: rgba(251, 249, 249, 0.55);
        }

        .music-eq {
            display: flex;
            align-items: flex-end;
            gap: 3px;
            height: 16px;
            margin-top: 7px;

            span {
                width: 4px;
                height: 100%;
                border-radius: 2px 2px 0 0;
                background: #923c56;
                transform-origin: bottom;
                animation: eq 1.1s ease-in-out infinite;

                &:nth-child(2n) { background: #d3546d; }
                &:nth-child(1) { animation-delay: 0s; }
                &:nth-child(2) { animation-delay: 0.18s; }
                &:nth-child(3) { animation-delay: 0.36s; }
                &:nth-child(4) { animation-delay: 0.09s; }
                &:nth-child(5) { animation-delay: 0.27s; }
                &:nth-child(6) { animation-delay: 0.45s; }
            }
        }
    }

    @keyframes eq {
        0%, 100% { transform: scaleY(0.25); }
        50%      { transform: scaleY(1); }
    }

    .draw-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 200;
        pointer-events: none;
        touch-action: none;

        &.active { pointer-events: all; }
    }

    // ── Rechte Seite: Stapel & Sticker ───────────────────────────────────────

    .side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
        flex-shrink: 0;
    }

    .stack-wrap, .sheet-wrap, .pad-wrap, .tape-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .postit-pad {
        position: relative;
        width: 84px;
        height: 84px;
        background: none;
        border: none;
        padding: 0;
        cursor: grab !important;
        touch-action: none;

        &:hover .l1 { transform: rotate(-2deg) translateY(-3px); }
        &:active { cursor: grabbing !important; }
    }

    .pad-layer {
        position: absolute;
        inset: 0;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.3);
        box-shadow: 0 2px 6px rgba(39, 39, 39, 0.1);
        transition: transform 0.2s;

        &.l3 { transform: rotate(3deg); }
        &.l2 { transform: rotate(-2deg); }
        &.l1 {
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                font-size: 18px;
                color: rgba(39, 39, 39, 0.35);
            }

            &.dark span { color: rgba(251, 249, 249, 0.6); }
        }
    }

    .tape-roll {
        background: none;
        border: none;
        padding: 4px;
        cursor: grab !important;
        line-height: 0;
        touch-action: none;
        transition: transform 0.2s;

        &:hover { transform: rotate(-8deg) scale(1.08); }
        &:active { cursor: grabbing !important; }
    }

    .stack {
        position: relative;
        width: 110px;
        height: 124px;
        background: none;
        border: none;
        padding: 0;
        cursor: grab !important;
        touch-action: none;

        &:hover .c1 { transform: rotate(-1deg) translateY(-4px); }
        &:active { cursor: grabbing !important; }
    }

    .stack-card {
        position: absolute;
        inset: 0;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.3);
        box-shadow: 0 2px 8px rgba(39, 39, 39, 0.12);
        transition: transform 0.2s;

        &.c3 { transform: rotate(4deg); }
        &.c2 { transform: rotate(-3deg); }
        &.c1 {
            transform: rotate(1deg);
            padding: 8px 8px 26px;
        }
    }

    .stack-inner {
        width: 100%;
        height: 100%;
        border: 1.5px dashed rgba(39, 39, 39, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;

        &::after {
            content: '+';
            font-family: 'Caveat', cursive;
            font-size: 30px;
            color: #999;
        }
    }

    .sheet {
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.3);
        box-shadow: 0 2px 8px rgba(39, 39, 39, 0.1);
        padding: 12px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        width: 110px;
    }

    .sheet-sticker {
        background: none;
        border: 1px dashed rgba(39, 39, 39, 0.15);
        border-radius: 4px;
        padding: 4px;
        cursor: grab !important;
        line-height: 0;
        transition: transform 0.15s, border-color 0.15s;
        touch-action: none;

        &:hover {
            transform: scale(1.15) rotate(5deg);
            border-color: rgba(39, 39, 39, 0.4);
        }
        &:active { cursor: grabbing !important; }
    }

    // ── Navigation ───────────────────────────────────────────────────────────

    .page-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing-40);

        button {
            font-size: 22px;

            &:disabled {
                opacity: 0.25;
                cursor: not-allowed;
                text-decoration: none;
            }
        }
    }

    .page-dots {
        display: flex;
        gap: 10px;
    }

    .dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(39, 39, 39, 0.2);
        transition: background 0.25s, transform 0.25s;

        &.active {
            background: #272727;
            transform: scale(1.25);
        }
    }

    // ── Ghost ────────────────────────────────────────────────────────────────

    .ghost {
        position: fixed;
        z-index: 9999;
        pointer-events: none;
        transform: translate(-50%, -50%) rotate(-3deg);
        opacity: 0.85;
    }

    .ghost-polaroid {
        width: 110px;
        height: 124px;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.4);
        box-shadow: 0 6px 20px rgba(39, 39, 39, 0.25);
        padding: 8px 8px 26px;

        &::after {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            border: 1.5px dashed rgba(39, 39, 39, 0.3);
        }
    }

    .ghost-postit {
        width: 100px;
        height: 90px;
        background: #fff;
        border: 1px solid rgba(39, 39, 39, 0.4);
        box-shadow: 0 6px 20px rgba(39, 39, 39, 0.25);
    }

    .ghost-tape {
        width: 70px;
        height: 18px;
        background: rgba(39, 39, 39, 0.2);
        border-left: 1px dashed rgba(39, 39, 39, 0.3);
        border-right: 1px dashed rgba(39, 39, 39, 0.3);
    }

    // ── Mobile ───────────────────────────────────────────────────────────────

    @media (max-width: 1180px) {
        .desk {
            flex-wrap: wrap;
        }

        .tools {
            flex-direction: row;
            order: 1;
            width: 100%;
            justify-content: center;
        }

        .book { order: 2; width: 100%; }

        .side {
            flex-direction: row;
            order: 3;
            width: 100%;
            justify-content: center;
            align-items: flex-start;
        }
    }

    @media (max-width: 768px) {
        .scrapbook-section {
            padding: 48px 12px 60px;
            gap: 16px;
        }

        .title-column h1 { font-size: 40px; }
        .title-hint { display: none; }

        // Werkzeuge: kompakte horizontale Leiste
        .tools {
            gap: 10px;
            padding: 10px 12px;
            background: rgba(39,39,39,0.04);
            border-radius: 40px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .tool svg { width: 56px; height: auto; }

        // Seitenleiste: horizontal scrollbar
        .side {
            overflow-x: auto;
            gap: 20px;
            padding: 8px 4px 4px;
            justify-content: flex-start;
            flex-wrap: nowrap;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            &::-webkit-scrollbar { display: none; }
        }

        .stack-wrap, .pad-wrap, .tape-wrap, .sheet-wrap {
            flex-shrink: 0;
        }

        .hint { font-size: 14px; }

        // Navigation
        .page-nav {
            gap: var(--spacing-20);

            button { font-size: 16px; }
        }

        .add-page { display: none; }
    }
</style>
