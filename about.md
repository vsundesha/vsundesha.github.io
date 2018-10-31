---
layout: page
title: About
permalink: /about/
published: true
---

<div class="page" markdown="1">

{% capture page_subtitle %}
<img
    class="me"
    alt="{{ author.name }}"
    src="{{ site.author.photo | relative_url }}"
    srcset="{{ site.author.photo2x | relative_url }} 2x"
/>
{% endcapture %}

{% include page/title.html title=page.title subtitle=page_subtitle %}

## A bit about me .. 

Hello, my name is Vicky I am a Full-Stack developer from Barcelona, Spain and hold a degree in web development along with a diploma in Bioinformatics which gives me the ability to have an eye for design and a love for writing clean and simple code, here you can check out some of my work. I am currently working at the Barcelona supercomputing center in the life science department. I enjoy good music and football ! 

</div>
