# James Akintunde — Brand foundation

Direction: a personal, editorial engineering portfolio. The supplied portrait anchors the palette: tailored navy, warm paper, quiet slate and a small brass accent. These are design choices for this portfolio, not pre-existing brand requirements.

## Color roles

| Token | Color | Role |
| --- | --- | --- |
| Paper | `#F6F4EF` | Main background and reading surfaces |
| Ink | `#202B3D` | Headings, body emphasis, primary buttons |
| Midnight | `#182335` | Workflow section and dark art surfaces |
| Slate | `#626875` | Secondary text on paper |
| Mist | `#E0E5EB` | Cool project illustration surfaces |
| Sand | `#E8E2D8` | Warm contact section |
| Brass | `#D1B78B` | Selected workflow node, decorative highlights on dark surfaces |
| Deep brass | `#826A43` | Small accents and focus rings on light surfaces |
| Hairline | `#D8D9DC` | Dividers on light surfaces; never body text |

Brass is an accent, not body text on ivory. Dark sections use light slate text. Keep interface colors consistent across illustrations, favicon, social preview and motion. Use warm and cool surfaces in distinct sections, with a shared low saturation. Avoid a separate accent color for each card.

## Typography and layout

DM Sans Variable for interface and body text. Instrument Serif italic for the human, expressive half of major headings. Both are bundled locally. Preserve generous space around titles and limit body line lengths. Body copy stays left aligned. Keep primary actions prominent, secondary links quiet, and case-study outcomes easy to scan.

## Photography

Use the supplied original portrait unchanged. Show the full landscape composition with its natural grey backdrop, navy tailoring and warm skin tones. Reserve dimensions to prevent layout shifts. Give the image descriptive alternative text and lazy-load it below the fold.

## Light, shading and gradients

Use restrained, related-color gradients only on artwork: navy `#253650 → #182335`, cool mist `#E7EBF0 → #DCE2E9`, warm stone `#ECE9E3 → #E1DDD6`. Keep reading sections flat. Shadows use translucent navy at low opacity; borders provide most separation. Avoid saturated glows and multicolor background blobs.

## Motion and interaction

Short entrance transitions use opacity and transform. Hover movement is small and supports the action. The ambient sculpture rotates slowly, has a pause button, respects reduced motion, and suspends drawing when offscreen or the document is hidden. The workflow advances only after a visitor presses Play; every stage is manually selectable. Do not hide essential content behind animation.

## Design references reviewed

Reviewed November 8, 2026 (America/Detroit).

- [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): normal text target 4.5:1, large text 3:1. Check actual foreground/background pairs; these checks do not certify complete WCAG conformance.
- [web.dev animation guidance](https://web.dev/articles/animations-guide): prefer transform and opacity to layout-driven motion.
- [MDN linear gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/gradient/linear-gradient): related color stops and explicit direction for predictable gradients.

Responsive checks target 320px, 390px, tablet, and desktop. Verify dialog keyboard behavior, focus visibility, readable text, and no horizontal document overflow whenever layout changes.

## Full-page comfort review

The palette is a design choice, not a medically validated way to prevent headaches. Individual preferences, screen brightness, lighting, text size, and motion sensitivity vary. Contrast compliance alone does not establish comfort or complete accessibility.

Research reviewed November 8, 2026:

- [NHS colour guidance](https://service-manual.nhs.uk/design-system/styles/colour) uses tinted backgrounds to reduce overall glare and keep key information distinct. Application: retain warm ivory reading surfaces, with navy text; do not make the whole page a saturated brand color.
- [Home Office colour guidance](https://design.homeoffice.gov.uk/design-system/styles/colour) demonstrates using a strong brand color sparingly. Application: brass highlights are limited to accents and selected states. This is an adaptation of the principle, not a claim that their tested palette validates these exact hex values.
- [Nielsen Norman Group: minimize cognitive load](https://www.nngroup.com/articles/minimize-cognitive-load/) recommends reducing clutter and unnecessary mental work. Application: remove duplicate identity block, use predictable section structure, keep four visible project summaries and reveal details on request. No visitor must memorize a workflow state to navigate the portfolio.
- [W3C animation guidance](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) identifies nonessential motion as a potential distraction and vestibular trigger. Application: no parallax or scroll hijacking; system reduced-motion support; explicit ambient pause; saved motion preference; remove secondary looping ring. Workflow playback remains visitor initiated.
- [W3C visual presentation](https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html) informs line length, alignment and spacing. Application: left-aligned paragraphs, generous line height, wider reading text, and bounded text measure. This does not claim the whole AAA criterion is met.

Core foreground/background ratios calculated using WCAG relative luminance: ink/paper 12.96:1; slate/paper 5.09:1; brass/midnight 8.16:1; deep brass/paper 4.67:1; light slate/midnight 9.25:1; contact copy/sand 5.58:1. All exceed 4.5:1 for normal text. Decorative illustration labels are not relied on to communicate project facts.

Final palette rationale: navy provides hierarchy and matches the portrait; ivory carries most reading; slate separates supporting content; warm sand creates a quiet contact section; brass is reserved for small highlights. Related-color gradients are confined to illustration panels, not paragraphs. This retains a distinctive appearance while limiting simultaneous contrast, color variation, and motion.
