---
title: "Legenda"
excerpt: "Showcase of legenda in the design system"
status: "Draft"
meta:
  title: Legenda component
eleventyNavigation:
  key: List - Legenda
  parent: Components
---

The default, ordered and unordered, lists are part of the content styling. These can be viewed at the [Content Component](/components/content/)

## Legenda

The color of the marker can be set by a css variable, default the value of the marker is grey.

{% component %}
{% render "./default.component.liquid" %}
{% endcomponent %}

### Blue colors

{% component %}
{% render "./blue.component.liquid" %}
{% endcomponent %}

### Risk

{% component %}
{% render "./risk.component.liquid" %}
{% endcomponent %}

### Custom colors

{% component %}
{% render "./custom.component.liquid" %}
{% endcomponent %}
