// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['**/dist', '**/node_modules', '**/.rspress'] },
  
  // 基础 JS 规则
  js.configs.recommended,
  
  // TS 推荐规则
  ...tseslint.configs.recommended,
  
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      // 架构思考：AI 生成的代码容易出现 unused vars，// 在开发阶段设为 warn，避免打断 AI 辅助开发的流畅性
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  }
);