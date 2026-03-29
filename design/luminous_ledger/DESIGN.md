# Design System Document: The Luminous Ledger

## 1. Overview & Creative North Star
**Creative North Star: "The Weightless Archive"**
This design system moves away from the "heavy" aesthetics of traditional banking and accounting software. Instead of rigid grids and dense borders, it embraces an airy, editorial approach that feels like light passing through frosted glass. By leveraging intentional asymmetry, expansive breathing room, and overlapping "floating" layers, we transform financial data from a source of stress into a clear, navigable landscape. The goal is to make the freelancer feel organized, not restricted.

## 2. Colors & Surface Logic
The palette is rooted in high-luminosity pastels supported by a robust Material Design functional framework.

### The Color Palette
- **Primary (Action):** `#005da7` (Core interactions) / `#68abff` (Container/Hover)
- **Secondary (Calm):** `#4f5d67` (Neutral depth)
- **Tertiary (Growth/Balance):** `#525e55` (Mint-inflected accents)
- **Base Surface:** `#FFFFFF` (The canvas for all light-based effects)

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined through:
1. **Background Shifts:** Placing a `surface-container-lowest` card on a `surface-container-low` background.
2. **Negative Space:** Using the Spacing Scale (specifically `8` to `12` units) to create "invisible containers."
3. **Soft Elevation:** Using tonal transitions rather than structural lines to separate content.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. To create depth without shadows:
- **Base Layer:** `surface` (#f6f6f6)
- **Mid Layer:** `surface-container-low` (#f0f1f1) for secondary content.
- **Top Layer:** `surface-container-lowest` (#ffffff) for primary interactive cards.

### The "Glass & Gradient" Rule
To achieve the "Luminous" signature, use **Glassmorphism** for floating elements (overlays, modal headers, navigation bars).
- **Effect:** `surface-container-lowest` at 70% opacity + 20px Backdrop Blur.
- **Signature Textures:** Apply a subtle linear gradient from `primary` to `primary-container` (at 10% opacity) on large hero sections to provide a "soul" to the white space.

## 3. Typography: Pretendard Editorial
We use **Pretendard** (and its high-end variable weights) to establish an authoritative yet approachable voice.

| Level | Token | Weight | Size | Tracking | Use Case |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | 700 (Bold) | 3.5rem | -0.02em | Hero financial balances |
| **Headline** | `headline-md` | 600 (Semi) | 1.75rem | -0.01em | Section titles / Monthly summaries |
| **Title** | `title-lg` | 600 (Semi) | 1.375rem | 0 | Card headings |
| **Body** | `body-md` | 400 (Reg) | 0.875rem | +0.01em | Transaction details / Descriptions |
| **Label** | `label-md` | 500 (Med) | 0.75rem | +0.04em | Overline text / Small data labels |

**The Hierarchy Rule:** Always pair a `display-lg` value (e.g., a total revenue figure) with a `label-md` uppercase descriptor to create a high-contrast editorial look.

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** and **Ambient Light Simulation**.

*   **The Layering Principle:** Stack `surface-container-lowest` cards on `surface-container-low` sections. This creates a soft, natural "lift" that feels premium and clean.
*   **Ambient Shadows:** Use only when an element is "floating" (e.g., a FAB or active Modal).
    *   *Values:* Y: 8px, Blur: 24px, Color: `on-surface` at 6% opacity.
*   **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use the `outline-variant` token at **15% opacity**. Never use 100% opaque lines.
*   **Corner Radii:** Use `lg` (2rem) for main dashboard containers and `DEFAULT` (1rem) for internal components like inputs and small buttons.

## 5. Components

### Buttons
*   **Primary:** `primary` background with `on-primary` text. Use `xl` (3rem) rounding for a pill shape. 
*   **Secondary (Glass):** `surface-container-high` background with 40% opacity and a subtle `outline-variant` (10% opacity).
*   **Interaction:** On hover, increase opacity or shift from `primary` to `primary-dim`.

### Input Fields
*   **Style:** No bottom line. Use a `surface-container-low` filled background with `DEFAULT` (1rem) corner radius.
*   **Focus State:** A 2px "Ghost Border" using `primary` at 30% opacity.

### Cards & Lists
*   **Constraint:** Zero dividers. Use vertical white space (`spacing-6` or `spacing-8`) to separate list items.
*   **Visual Separator:** For transaction lists, use a subtle background shift on hover (`surface-container-highest` at 5% opacity).

### Financial Chips
*   **Selection:** Use pastel containers (`tertiary-container` for income, `error-container` for expenses) with high-contrast text (`on-tertiary` / `on-error`).

### Dashboard Specifics: "The Pulse"
*   **Data Visualization:** Use soft, flowing gradients for line charts rather than jagged lines. The area under the curve should use a 5% opacity fill of the `primary` color.

## 6. Do’s and Don’ts

### Do
*   **Do** embrace extreme white space. If a layout feels "empty," it is likely working.
*   **Do** use overlapping elements. A card can slightly "hang" over a section header to break the grid.
*   **Do** use `on-surface-variant` for secondary text to maintain a soft contrast ratio that is still accessible.

### Don't
*   **Don't** use pure black `#000000`. Use `on-background` (#2d2f2f) for all "black" text.
*   **Don't** use sharp corners. Everything must feel approachable and "soft-touch."
*   **Don't** use heavy dropshadows. If the depth isn't clear through color shifts, re-evaluate the surface nesting.