---
title: "Links"
excerpt: "Showcases of the different types of links available in the design system."
status: "Draft"
meta:
  title: Link component
eleventyNavigation:
  key: Link
  parent: Components
---

{% assign label = "Link text" %}

## Default link

{% component %}
{% render "./link.component.liquid", label: label %}
{% endcomponent %}

## Outline link

{% component %}
{% render "./outline.component.liquid", label: label %}
{% endcomponent %}

## Menu link

{% component %}
{% render "./menu.component.liquid", label: label %}
{% endcomponent %}

## Block link

{% assign label = "Verhouding aantal soorten risico’s in de buurt" %}

{% component %}
{% render "./block.component.liquid", label: label %}
{% endcomponent %}
