package com.knowprocess.icons;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.jupiter.api.Test;

class IconPackageSmokeTest {

    @Test
    void webjarContainsVersionedIconAssets() throws IOException {
        Path webjarRoot = Paths.get("src/main/resources/META-INF/resources/webjars/knowprocess-icons");
        assertTrue(Files.isDirectory(webjarRoot), "Expected the webjar root directory to exist");

        for (String version : new String[] { "3.0.0", "3.1.0" }) {
            Path versionDir = webjarRoot.resolve(version);
            assertTrue(Files.isDirectory(versionDir), "Expected version directory for " + version + " to exist");
            assertTrue(Files.exists(versionDir.resolve("style.css")), "Expected style.css for " + version);
            assertTrue(Files.exists(versionDir.resolve("selection.json")), "Expected selection.json for " + version);
            assertTrue(Files.isDirectory(versionDir.resolve("fonts")), "Expected fonts directory for " + version);
        }

        Path latest = webjarRoot.resolve("3.1.0");
        byte[] demoBytes = Files.readAllBytes(latest.resolve("demo.html"));
        String demoHtml = new String(demoBytes, StandardCharsets.UTF_8);
        assertTrue(demoHtml.contains("knowprocess"), "Latest demo.html should describe the KnowProcess icon set");

        byte[] cssBytes = Files.readAllBytes(latest.resolve("style.css"));
        String styleCss = new String(cssBytes, StandardCharsets.UTF_8);
        assertTrue(styleCss.contains("kp-icon-"), "Latest stylesheet should include the KnowProcess icon classes");
    }
}
