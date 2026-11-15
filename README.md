# KnowProcess Icons

This project packages the KnowProcess icon font as a Maven-compatible webjar. The build is intentionally simple: Java is only used as a way to package the static font assets, not to run any application logic.

## Versioned icon sets

| Version | Demo | Files |
| --- | --- | --- |
| 3.1.0 | [Open demo](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.1.0/demo.html) | [style.css](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.1.0/style.css), [selection.json](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.1.0/selection.json), [fonts](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.1.0/fonts) |
| 3.0.0 | [Open demo](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.0.0/demo.html) | [style.css](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.0.0/style.css), [selection.json](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.0.0/selection.json), [fonts](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.0.0/fonts) |

## Latest demo

The current packaged release is 3.1.0. Open the latest demo here to browse the glyph set in a browser:

- [3.1.0 demo](src/main/resources/META-INF/resources/webjars/knowprocess-icons/3.1.0/demo.html)

## Java compatibility

The project deliberately targets Java 8. That is sufficient because there are no Java runtime classes or application logic to modernize; Java is only being used to create the jar and publish the static webjar assets. Raising the compiler target would not materially improve the package unless Java code is added later.

## Publishing and artifact coordinates

Releases are published to GitHub Packages via Maven. For a tagged release, create a version tag like `v3.1.1` and push it; the workflow will publish the corresponding Maven artifact version `3.1.1` automatically.

The package is published to GitHub Packages (GHCR via the Maven registry) and has the following coordinates:

```xml
<dependency>
  <groupId>com.knowprocess.icons</groupId>
  <artifactId>icons</artifactId>
  <version>3.1.0</version>
</dependency>
```

To consume the package from GitHub Packages:

```xml
<repositories>
  <repository>
    <id>github</id>
    <url>https://maven.pkg.github.com/tstephen</url>
  </repository>
</repositories>
```

## Package structure

The artifact bundles the font files under the standard WebJars path:

```text
META-INF/resources/webjars/knowprocess-icons/
  3.0.0/
  3.1.0/
```

This makes it easy to include the latest or a pinned historical icon set in web projects.
