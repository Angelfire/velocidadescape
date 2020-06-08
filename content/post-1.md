---
slug: "/my-first-post"
date: "2020-06-03"
title: "My first blog post"
description: "Just a Simple description"
author: "Andres Bedoya"
tags: ["ruby"]
---

Lorem Ipsum is simply dummy text of the printing and typesetting industry.

## Subtitle with code
```ruby
def show
  puts "Hello there!"
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end