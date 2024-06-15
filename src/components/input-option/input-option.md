---
title: "Input Options"
excerpt: "Example of checkbox, toggle, and radio buttons that are used in the design system."
meta:
  title: Input options component
eleventyNavigation:
  key: Input option
  parent: Components
---

## Checkbox

{% component %}
{% render "./checkbox.component.liquid" %}
{% endcomponent %}

### Disabled

{% component %}
{% render "./checkbox.component.liquid" disabled: true %}
{% endcomponent %}

## Radion button

{% component %}
{% render "./radio.component.liquid" %}
{% endcomponent %}

### Disabled

{% component %}
{% render "./radio.component.liquid" disabled: true %}
{% endcomponent %}

## Toggle switch

{% component %}
{% render "./toggle.component.liquid" %}
{% endcomponent %}

### Disabled

{% component %}
{% render "./toggle.component.liquid" disabled: true %}
{% endcomponent %}
