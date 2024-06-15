---
title: "Icons"
excerpt: "This is a sample for displaying icons with the design system"
meta:
  title: Icon component
eleventyNavigation:
  key: Icon
  parent: Components
---

## Icons

It is possible to change the color of an icon by changing the text color

{% component %}
{% render "./icon.component.liquid" %}
{% endcomponent %}

## Fundermaps icons

Fundermaps icons follow the default color, but it is possible to give a fundermaps icon a blue or green accent.

{% component %}
{% render "./fundermaps.component.liquid" %}
{% endcomponent %}

## Foundation

{% component %}
{% render "./foundation.component.liquid" %}
{% endcomponent %}

## Facade

{% component %}
{% render "./facade.component.liquid" %}
{% endcomponent %}
