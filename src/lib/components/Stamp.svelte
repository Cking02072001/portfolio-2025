<script module lang="ts">
    // Laufende Nummer, damit die SVG-Filter pro Stempel eindeutige IDs bekommen
    let stampCount = 0;
</script>

<script lang="ts">
    let {
        label = 'In Arbeit',
        color = '#923c56',
        rotate = -13,
        width = 168
    }: {
        label?: string;
        color?: string;
        rotate?: number;
        width?: number;
    } = $props();

    const uid = `stamp-${++stampCount}`;
</script>

<svg
    class="stamp"
    viewBox="0 0 220 92"
    {width}
    style="transform: rotate({rotate}deg);"
    role="img"
    aria-label={label}
>
    <defs>
        <!-- Ausgefranste Kanten, als wäre der Gummi nicht ganz plan aufgesetzt -->
        <filter id="{uid}-rough">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="7" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.6" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <!-- Körnung für die Stellen, an denen die Farbe nicht durchgekommen ist -->
        <filter id="{uid}-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="3" />
            <feColorMatrix type="saturate" values="0" />
        </filter>

        <mask id="{uid}-ink">
            <rect width="220" height="92" fill="#fff" />
            <rect width="220" height="92" filter="url(#{uid}-grain)" opacity="0.5" />
        </mask>
    </defs>

    <g mask="url(#{uid}-ink)" filter="url(#{uid}-rough)" fill="none" stroke={color}>
        <rect x="5" y="5" width="210" height="82" rx="8" stroke-width="4" />
        <rect x="13" y="13" width="194" height="66" rx="4" stroke-width="1.6" opacity="0.75" />
        <text
            x="110"
            y="52"
            fill={color}
            stroke="none"
            text-anchor="middle"
            dominant-baseline="middle"
        >{label}</text>
    </g>
</svg>

<style>
    .stamp {
        height: auto;
        pointer-events: none;
        user-select: none;
    }

    text {
        font-family: var(--font-heading);
        font-size: 32px;
        letter-spacing: 3px;
        text-transform: uppercase;
    }
</style>
