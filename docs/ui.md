<!-- TOC -->

- [1. UI](#1-ui)
    - [1.1. Special Elements](#11-special-elements)
        - [1.1.1. List titles](#111-list-titles)
        - [1.1.2. Create a list form](#112-create-a-list-form)
        - [1.1.3. New Card Form](#113-new-card-form)
        - [1.1.4. Colorblind labels](#114-colorblind-labels)

<!-- /TOC -->

# 1. UI

## 1.1. Special Elements


### 1.1.1. List titles
The React component should swap the list title `<p>` tag for an `<input>` tag when it is clicked on. Pressing enter during editing the title or blurring the input should submit the change and swap the `<p>` back in.

NOTE: It is important to have the `<p>` and `<input>` wrapped in a `<div>` so that the styles will work properly.


### 1.1.2. Create a list form
When the create a list button tile is clicked, it should add the `selected` class to the `#new-list.new-list` element. This will display the form. When either the “Save” or “X” buttons are clicked, the `selected` class should be removed.


### 1.1.3. New Card Form
The new card form is active when the parent `.list-wrapper` has the `add-dropdown-active` class and the `.add-dropdown.add-bottom` element has the `active-card` class.

Since only one list should have the form active at a time, only one list should  have the `add-dropdown-active` class at a time.

### 1.1.4. Colorblind labels

Colorblind labels are toggled by adding the `colorblind` class to a parent element. The easiest way to do this is to apply it to the top-most `<div>` rendered in our application, because that is a parent to both the lists UI and the card UI.

It could also be added in multiple places, to parents of both the lists UI and card UI.
