---
title: "Buttons"
excerpt: "Showcases of the different types of buttons available in the design system."
meta:
  title: Button component
status: "Draft"
eleventyNavigation:
  key: Button
  parent: Components
---

{% assign label = "Button" %}

## Solid button

This is the primary button, this should be used for a call to action. A interface element, should contain 1 primary button.

{% component %}
{% render "./button.component.liquid", variant: "button--solid", label: label, classes: "group" %}
{% endcomponent %}

### Button variations

{% capture label %}
<span class="button__label">Log in</span>
{% inlineSvg "arrow-right" "aspect-square h-3.5 -rotate-45 transition-transform group-hover:rotate-0" -%}
{% endcapture %}

{% component %}
{% render "./button.component.liquid", variant: "button--solid", label: label, classes: "bg-grey-700 hover:bg-red-500 group" %}
{% endcomponent %}

## Outline button

This is the secondary button, this can be used for all secondary actions.

{% assign label = "Button" %}

{% component %}
{% render "./button.component.liquid", variant: "button--outline", label: label, classes: "group" %}
{% endcomponent %}

## Link button

When is the tertiary button.

{% component %}
{% render "./button.component.liquid", variant: "button--link", label: label, classes: "" %}
{% endcomponent %}

## Icon button

All buttons can be used as an icon only button, make sure that all icon buttons contain an bla with the class `sr-only`, so that the button is still accessible.

{% capture label %}
{% inlineSvg "arrow-left" "w-4 aspect-square" -%}
<span class="sr-only">This is a label</span>
{% endcapture %}

{% component %}
{% render "./button.component.liquid", variant: "button--solid button--icon", label: label %}
{% endcomponent %}

{% capture label %}
{% inlineSvg "target" "w-4 aspect-square" -%}
<span class="sr-only">This is a label</span>
{% endcapture %}

{% component %}
{% render "./button.component.liquid", variant: "button--square", label: label %}
{% endcomponent %}
