---
name: Peek-A-Boo Banner
collection: order
---

# Conditional Banner

The Peek-A-Boo Banner is a top mounted sticky banner that is displayed only when a certain element on the page is not viewable in the current viewport. To preview on this page scroll or resize the window until "Important Showtime Button" is no longer in the viewport.

Content changes should happen here: sho/views/partials/_peek_a_boo_banner.jsp

Please note: There are two implementations of the Peek-A-Boo banner on the site. The general banner that's used throughout SHO.com, and the original banner that's just for the "Order Promotion Pages" (/hive, /stream-showtime, /order-showtime). The banner on the "Order Promotion Pages" is slightly different/older than the general SHO.com version (featured on this page of the styleguide). The biggest difference is the "Order Promotion Pages" version does not have the close button. This is intended and by design. Thusly changes to the Peek-a-boo jsp (above) will impact the banner across SHO.com except on those three "Order Promotion Pages". If edits are needed to those three stand alone pages they will need to take place in each jsp respectively.  

<div class="js-peek-a-boo-banner peek-a-boo--banner" style="height: 90px; width: 100%; background: #B10000; position: fixed; top: 0; left: 0; display:none;">
    <span style="position: fixed; top: 0; font-size: 24px; right: 0; margin: 10px; color: white; cursor: pointer;" class="peek-a-boo--dismiss">X</span>
    <p>Hello W0rld</p>
</div>
<p>...</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Feugiat nibh sed pulvinar proin gravida hendrerit. Tellus molestie nunc non blandit massa enim nec. Diam phasellus vestibulum lorem sed risus ultricies tristique. A scelerisque purus semper eget duis at. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Cras sed felis eget velit aliquet sagittis id consectetur.</p>
<div class="peek-a-boo--trigger">
    <button class="button--solid-red">
        Important Showtime Item
    </button>
</div>
<br><br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Feugiat nibh sed pulvinar proin gravida hendrerit. Tellus molestie nunc non blandit massa enim nec. Diam phasellus vestibulum lorem sed risus ultricies tristique. A scelerisque purus semper eget duis at. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Cras sed felis eget velit aliquet sagittis id consectetur. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Ut ornare lectus sit amet est placerat in. Vivamus arcu felis bibendum ut tristique. Est placerat in egestas erat imperdiet sed euismod. Non tellus orci ac auctor augue mauris augue neque gravida. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Dolor sit amet consectetur adipiscing. Feugiat nisl pretium fusce id velit ut tortor. Tincidunt ornare massa eget egestas purus viverra accumsan in.
<br><br>
Eu turpis egestas pretium aenean. Urna molestie at elementum eu facilisis sed odio. Elit at imperdiet dui accumsan sit amet. Eu facilisis sed odio morbi quis commodo. Leo a diam sollicitudin tempor id eu. Facilisi nullam vehicula ipsum a arcu. Eu non diam phasellus vestibulum lorem. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Non sodales neque sodales ut etiam sit amet nisl purus. Volutpat commodo sed egestas egestas fringilla phasellus faucibus. Mattis ullamcorper velit sed ullamcorper. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Ipsum a arcu cursus vitae congue. Viverra justo nec ultrices dui sapien eget. Urna neque viverra justo nec. Viverra tellus in hac habitasse platea dictumst vestibulum. Nullam non nisi est sit. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Vitae turpis massa sed elementum tempus egestas sed.
<br><br>
Consequat mauris nunc congue nisi. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Metus aliquam eleifend mi in. Lectus urna duis convallis convallis. Id interdum velit laoreet id donec. Nibh tellus molestie nunc non blandit massa enim nec dui. Eu mi bibendum neque egestas congue quisque egestas diam in. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Vitae nunc sed velit dignissim sodales ut eu. Aliquet risus feugiat in ante metus dictum at tempor commodo. Quam quisque id diam vel quam elementum pulvinar. Malesuada bibendum arcu vitae elementum curabitur vitae nunc. Lectus magna fringilla urna porttitor rhoncus. Turpis massa tincidunt dui ut ornare lectus sit.</p><br><br>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Feugiat nibh sed pulvinar proin gravida hendrerit. Tellus molestie nunc non blandit massa enim nec. Diam phasellus vestibulum lorem sed risus ultricies tristique. A scelerisque purus semper eget duis at. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Cras sed felis eget velit aliquet sagittis id consectetur. Sit amet aliquam id diam maecenas ultricies mi eget mauris. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Ut ornare lectus sit amet est placerat in. Vivamus arcu felis bibendum ut tristique. Est placerat in egestas erat imperdiet sed euismod. Non tellus orci ac auctor augue mauris augue neque gravida. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet. Dolor sit amet consectetur adipiscing. Feugiat nisl pretium fusce id velit ut tortor. Tincidunt ornare massa eget egestas purus viverra accumsan in.
<br><br>

