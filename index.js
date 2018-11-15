console.log(1);
module.exports = function (babel) {
  console.log(2);
  const {types: t, template} = babel;

  return {
    name: "add-default-export",
    visitor: {
      Program(path) {
        console.log(path);
        const declaredIds = [];
        for (const p of path.get("body")) {
          if (p.isVariableDeclaration()) {
            for (const decl of p.get("declarations")) {
              declaredIds.push(...Object.keys(decl.getBindingIdentifiers()));
            }
          }
        }

        if (declaredIds.length > 1) {
          console.log(declaredIds);
          path.pushContainer("body", template.statement.ast`export default [${t.identifier(declaredIds.join(','))}]`);
        } else {
          path.pushContainer("body", template.statement.ast`export default ${t.identifier(declaredIds[0])}`);
        }
      }
    }
  };
};
