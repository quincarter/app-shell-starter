# generic-card

# Generic Card Component
This is a generic card component with multiple variants available for use to give a different look/feel on the page.
## Usage

```typescript
import { GenericCard } from 'path/to/GenericCard.ts';

// doing class extends prevents the GenericCard constructor from failing to initialize in the current scope
customElements.define('your-tag-name', class extends GenericCard {});
```

## Basic markup

```html
<your-tag-name>
  <div slot="card-title">
    This is a card title
  </div>
  <div>
    This is a default slot
  </div>
  <div slot="card-footer">
    This is in the footer
  </div>
</your-tag-name>
```

## Properties

| Property      | Attribute          | Type          | Default      | Description                                      |
|---------------|--------------------|---------------|--------------|--------------------------------------------------|
| `avatar`      | `img-avatar`       | `Boolean`     | "false"      | If attached to the element, this will make the img tag be circular like an avatar |
| `disabled`    | `card-disabled`    | `Boolean`     | "false"      | If attached to the element, this disables the card from any interaction. |
| `imgAlt`      | `img-alt`          | `String`      | "'card-img'" | Sets the alt text for the <img> tag for accessibility reasons. |
| `imgHeight`   | `img-height`       | `String`      | "'inherit'"  | Sets the height of the image.                    |
| `imgSrc`      | `img-src`          | `String`      | "''"         | Sets the path for the image to be displayed      |
| `imgWidth`    | `img-width`        | `String`      | "'inherit'"  | Sets the width of the image                      |
| `interactive` | `card-interactive` | `Boolean`     | "false"      | If attached to the element, this makes the card appear to be clickable. |
| `variant`     | `card-variant`     | `CardVariant` | "default"    | Describes the variant displayed for the card     |

## Slots

| Name          | Description                                      |
|---------------|--------------------------------------------------|
|               | This is the card body and the default, unnamed slot. |
| `card-footer` | This is for the footer section of the card.      |
| `card-title`  | This is for the title section of the card.       |
