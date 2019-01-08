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

Hello, my name is Vicky I am a software developer from Barcelona, Spain. 
Welcome to my blog! I am currently working with the life science department at the Barcelona supercomputing center! 

</div>
